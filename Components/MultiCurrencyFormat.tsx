import { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";

type FormatNumber = (args: {
  value: number | string;
  currency?: string;
  decimals?: number;
  notShowZero?: boolean;
  style?: "decimal" | "percent" | "currency";
  language?: string;
  browserLocale: string | null;
}) => string;

export const formatNumberLocale: FormatNumber = (props) => {
  const {
    value,
    currency,
    style,
    language = "en-US",
    decimals = 0,
    browserLocale = "en-US",
  } = props;

  const isPercent = style === "percent";
  const notCurrency = !currency;

  let valueParsed = parseFloat(String(value));
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
    : valueParsed.toLocaleString(language || browserLocale || "en-US", {
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
  locale?: string;
};

const MultiCurrencyFormat: FunctionComponent<Props> = ({
  value,
  currency,
  decimals = 0,
  style = "decimal",
  locale = "en-US",
}) => {
  const [browserLocale, setBrowserLocale] = useState<string | null>(null);

  useEffect(() => {
    setBrowserLocale(window?.navigator?.language);
  }, []);

  return (
    <Shorter>
      {formatNumberLocale({
        value,
        currency,
        style,
        language: locale,
        decimals,
        browserLocale,
      })}
    </Shorter>
  );
};

export default MultiCurrencyFormat;
