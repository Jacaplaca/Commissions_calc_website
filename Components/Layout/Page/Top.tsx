import styled from "styled-components";
import { FunctionComponent } from "react";
import Path from "./Path";
import HeadlinePage from "./Headline";
import SubHeadlinePage from "./SubHeadline";
import { useTranslation } from "react-i18next";
import RiseButton from "../../Buttons/RiseButton";
import antdBreakpoints from "../../../themes/antdBreakpoints";

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
  @media ${antdBreakpoints.smMax} {
    margin-bottom: 10px;
  }
  z-index: 1;
  padding: 0 ${({ theme }) => theme.sizes.paddingLayoutHorizontal};
  .riseButtonWrapper {
    margin-top: 40px;
    margin-bottom: 30px;
    @media ${antdBreakpoints.smMax} {
      margin-top: 20px;
      margin-bottom: 15px;
      /* margin-bottom: 10px; */
    }
  }
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
      <div className="riseButtonWrapper">
        <RiseButton onClick={() => {}}>{t("startFree")}</RiseButton>
      </div>
    </Wrapper>
  );
};

export default TopPage;
