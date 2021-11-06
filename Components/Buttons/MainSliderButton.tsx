import Link from "next/link";
import styled from "styled-components";
import { FunctionComponent } from "react";

import { useTranslation } from "react-i18next";
import paths from "../../data/paths";
import { darken } from "polished";

type Props = {};
const Wrapper = styled.button`
  display: flex;
  cursor: pointer;
  outline: none;
  background-color: ${({ theme }) => theme.colors.palette.red.main};
  color: ${({ theme }) => theme.colors.text.light};
  border: 0px;
  font-weight: 600;
  transition: all 0.2s;
  padding: 15px 25px;
  border-radius: 20px;
  &:hover {
    background-color: ${({ theme }) =>
      darken(0.1, theme.colors.palette.red.main)};
  }
`;

const MainSliderButton: FunctionComponent<Props> = ({}) => {
  const { t, i18n } = useTranslation("common");

  return (
    <Link href={paths.freePlan} passHref>
      <a>
        <Wrapper name="slider__button__freePlan">{t("getStartedFree")}</Wrapper>
      </a>
    </Link>
  );
};

export default MainSliderButton;
