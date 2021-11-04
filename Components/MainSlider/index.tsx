import styled from "styled-components";
import { FunctionComponent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import MainTextsSlider from "../Sliders/MainTexts";
import MainImagesSlider from "../Sliders/MainImages";
import MainSliderButton from "../Buttons/MainSliderButton";
import Perspective from "../AnimatedTransform/Perspective";
import antdBreakpoints from "../../themes/antdBreakpoints";
import useGetImageResponsiveSize from "../../hooks/useGetImageResponsiveSize";

type Props = {};
const Wrapper = styled.section`
  display: flex;
  @media ${antdBreakpoints.xlMax} {
    padding: 0px 15px;
  }
  @media ${antdBreakpoints.mdMax} {
    flex-direction: column;
  }
  gap: 0 30px;
  .text,
  .image {
    @media ${antdBreakpoints.mdMax} {
      width: 100%;
      text-align: center;
    }
    width: 50%;
  }
  .image {
    @media ${antdBreakpoints.mdMax} {
      display: flex;
      justify-content: center;
    }
  }
`;

const images = ["main_slider_1.png", "main_slider_2.png", "main_slider_3.png"];

const MainSlider: FunctionComponent<Props> = ({}) => {
  const { width, height } = useGetImageResponsiveSize({
    xl: { width: 570, height: 570 },
    lg: { width: 470, height: 470 },
    md: { width: 370, height: 370 },
    sm: { width: 570, height: 570 },
    xs: { width: 350, height: 350 },
    default: { width: 170, height: 170 },
  });

  const {
    t,
    i18n: { language },
  } = useTranslation("common");

  const texts = [
    {
      title: t("mainSliderTitle1"),
      subTitle: t("mainSliderSubTitle1"),
      button: <MainSliderButton />,
    },
    {
      title: t("mainSliderTitle1"),
      subTitle: t("mainSliderSubTitle2"),
      button: <MainSliderButton />,
    },
  ];

  const [imagesPaths, setImagesPaths] = useState<string[]>([]);

  useEffect(() => {
    const fullPaths = images.map(
      (imageName) => `/pages/home/${language}/${imageName}`
    );
    setImagesPaths(fullPaths);
  }, [language]);

  return (
    <Wrapper>
      <div className="text">
        <MainTextsSlider slides={texts} duration={5000} />
      </div>
      <div className="image">
        <Perspective height={height} width={width}>
          <MainImagesSlider slides={imagesPaths} duration={3500} />
        </Perspective>
      </div>
    </Wrapper>
  );
};

export default MainSlider;
