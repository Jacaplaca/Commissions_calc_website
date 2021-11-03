import styled from "styled-components";
import { FunctionComponent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import MainTextsSlider from "../Sliders/MainTexts";
import MainImagesSlider from "../Sliders/MainImages";
import MainSliderButton from "../Buttons/MainSliderButton";
import ThreeDSlider from "../Sliders/ThreeD";
import Perspective from "../AnimatedTransform/Perspective";

type Props = {};
const Wrapper = styled.section`
  display: flex;
  gap: 0 30px;
  .text,
  .image {
    width: 50%;
  }
`;

const images = ["main_slider_1.png", "main_slider_2.png", "main_slider_3.png"];

const MainSlider: FunctionComponent<Props> = ({}) => {
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
        <Perspective height={570} width={570}>
          <MainImagesSlider slides={imagesPaths} duration={3500} />
        </Perspective>
        {/* <ThreeDSlider /> */}
      </div>
    </Wrapper>
  );
};

export default MainSlider;
