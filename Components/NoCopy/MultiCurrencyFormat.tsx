import { FunctionComponent, useEffect, useState } from "react";
import AnimatedNumber from "react-animated-number";
// import { useTheme } from "@material-ui/core/styles";
import styled, { useTheme } from "styled-components";
import { useRouter } from "next/router";

const nameSpaces: I18NamespacesType[] = ["common"];

const checkCurrencyPosition = (currency: string): "prefix" | "suffix" => {
  const prefix = ["$"];
  const suffix = ["PLN", "%"];
  if (prefix.includes(currency)) {
    return "prefix";
  } else if (suffix.includes(currency)) {
    return "suffix";
  } else {
    return "suffix";
  }
};

type FormatNumber = (args: {
  value: number | string;
  currency?: string;
  decimals?: number;
  notShowZero?: boolean;
  style?: "decimal" | "percent" | "currency";
  language?: string;
}) => string;

export const formatNumberLocale: FormatNumber = (props) => {
  // console.log("🚀 ~ file: MultiCurrencyFormat.tsx ~ line 33 ~ props", props);
  const { value, currency, style, language = "en", decimals = 0 } = props;
  const browserLocale = window?.navigator?.language;

  const isPercent = style === "percent";
  const notCurrency = !currency;

  let valueParsed = parseFloat(value);
  valueParsed = isPercent ? valueParsed / 100 : valueParsed;
  const hasDecimal = valueParsed % 1 != 0;
  const currencyIsPercent = currency === "%" || isPercent;
  const currencyHasStringAndNotPercent =
    typeof currency === "string" && !currencyIsPercent;
  // const isCurrency = style === "currency";
  const currencyWithDec = hasDecimal && currencyHasStringAndNotPercent;

  let minimumFractionDigits;
  minimumFractionDigits = hasDecimal ? (notCurrency ? 0 : decimals) : 0;
  minimumFractionDigits = currencyWithDec ? 2 : minimumFractionDigits;

  return isNaN(valueParsed)
    ? ""
    : valueParsed.toLocaleString(browserLocale || language, {
        style: currencyHasStringAndNotPercent
          ? "currency"
          : currencyIsPercent
          ? "percent"
          : style,
        currency,
        minimumFractionDigits,
        maximumFractionDigits: currencyHasStringAndNotPercent ? 2 : decimals,
      });
};

const Shorter = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

type Props = {
  value: number | string;
  currency?: string;
  noZeros?: boolean;
  anim?: boolean;
  animAdv?: boolean;
  decimals?: number;
  notShowZero?: boolean;
  style?: "decimal" | "percent" | "currency";
};

const MultiCurrencyFormat: FunctionComponent<Props> = ({
  value,
  currency,
  anim,
  animAdv,
  decimals = 0,
  style = "decimal",
  minDecimals = 0,
}) => {
  const theme = useTheme();
  const [animValue, setAnimValue] = useState(0);
  const router = useRouter();

  const notCurrency = style === "decimal" || style === "percent";

  useEffect(() => {
    const frames = 20;
    const step = Math.floor(value / frames);
    let i = 1; //  set your counter to 1
    if (anim) {
      function myLoop(forIncrease) {
        //  create a loop function
        setTimeout(function () {
          //  call a 3s setTimeout when the loop is called
          i++; //  increment the counter
          if (i < frames) {
            // const no = Math.random() * 100        //  if the counter < 10, call the loop function
            const increased = forIncrease + step;
            setAnimValue(increased);
            myLoop(increased); //  ..  again which will trigger another
          } else if (i === frames) {
            setAnimValue(value);
          } //  ..  setTimeout()
        }, 17 * (1 + i / 100));
      }
      myLoop(0);
    } else {
      setAnimValue(value);
    }
  }, [value]);

  // console.log(`multiCurrency ${value} ${typeof value}`);

  if (animAdv) {
    return (
      <AnimatedNumber
        component="text"
        value={animValue}
        style={{
          transition: "0.8s ease-out",
          fontSize: 17,
          transitionProperty: "background-color, color, opacity",
        }}
        frameStyle={(perc) =>
          perc === 100 ? {} : { color: theme.colors.antBlue.main }
        }
        stepPrecision={0}
        duration={300}
        formatValue={(n) =>
          parseFloat(n).toLocaleString("en", {
            minimumFractionDigits: notCurrency ? minDecimals : decimals,
            maximumFractionDigits: decimals,
          })
        }
      />
    );
  } else {
    return (
      <Shorter>
        {formatNumberLocale({
          value,
          currency,
          style,
          language: "en",
          decimals,
        })}
      </Shorter>
      // <NumberFormat
      //   value={notShowZero && parseInt(animValue) === 0 ? null : animValue}
      //   displayType={"text"}
      //   thousandSeparator={true}
      //   prefix={currency && checkCurrencyPosition(currency) === "prefix" && `${currency} `}
      //   suffix={currency && checkCurrencyPosition(currency) === "suffix" && ` ${currency} `}
      //   fixedDecimalScale
      //   decimalScale={noZeros ? 0 : decimals}
      // />
    );
  }
};

export default MultiCurrencyFormat;
