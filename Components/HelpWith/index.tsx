import styled from "styled-components";
import { FunctionComponent } from "react";
import Steps from "../Steps";
import antdBreakpoints from "../../themes/antdBreakpoints";
import { useTranslation } from "react-i18next";
const appName = process.env.NEXT_PUBLIC_APPNAME;

type Props = {};

const Wrapper = styled.section`
  @media ${antdBreakpoints.lgMax} {
    padding: 0 25px;
  }
  h2 {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text.dark};
  }
`;

const HelpWith: FunctionComponent<Props> = ({}) => {
  const { t, i18n } = useTranslation("common");

  const steps = [
    {
      number: 1,
      title: t("helpWith1Title"),
      description: t("helpWith1Description"),
    },
    {
      number: 2,
      title: t("helpWith2Title"),
      description: t("helpWith2Description"),
    },
    {
      number: 3,
      title: t("helpWith3Title"),
      description: t("helpWith3Description"),
    },
  ];

  return (
    <Wrapper>
      <h2>{t("helpWithMainTitle", { appName })}</h2>
      <Steps steps={steps} />
    </Wrapper>
  );
};

export default HelpWith;
