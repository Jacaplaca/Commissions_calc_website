import styled from "styled-components";
import { FunctionComponent } from "react";
import Path from "./Path";
import HeadlinePage from "./Headline";
import SubHeadlinePage from "./SubHeadline";
import { useTranslation } from "react-i18next";
import RiseButton from "../../Buttons/RiseButton";

type Props = {
  pathElements: string[];
  headline?: string;
  subHeadline?: string;
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  margin-bottom: 20px;
  z-index: 1;
`;

const TopPage: FunctionComponent<Props> = ({
  pathElements,
  headline,
  subHeadline,
}) => {
  const { t } = useTranslation(["common"]);
  return (
    <Wrapper>
      <Path elements={pathElements} />
      <HeadlinePage>{headline}</HeadlinePage>
      <SubHeadlinePage>{subHeadline}</SubHeadlinePage>
      <RiseButton onClick={() => {}}>{t("startFree")}</RiseButton>
    </Wrapper>
  );
};

export default TopPage;
