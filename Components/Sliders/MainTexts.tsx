import styled from "styled-components";
import { FunctionComponent } from "react";
import useSlider from "../../hooks/useSlider";
import antdBreakpoints from "../../themes/antdBreakpoints";

type SlideType = { title: string; subTitle: string; button: JSX.Element };

type Props = {
  slides: SlideType[];
  duration?: number;
};

const Wrapper = styled.section`
  display: flex;
  flex: 0;
  height: 100%;
`;

const SlideStyled = styled.div<{ duration: number }>`
  @keyframes slide-in-left {
    0% {
      transform: translateX(-100px);
      opacity: 0;
      filter: blur(10px);
    }
    5% {
      transform: translateX(0) scaleX(1) scaleY(1);
      filter: blur(0px);
      opacity: 1;
    }
    95% {
      transform: translateX(0);
      filter: blur(0px);
      opacity: 1;
    }
    100% {
      transform: translateX(100px);
      filter: blur(10px);
      opacity: 0;
    }
  }

  .slide-in-left {
    animation: slide-in-left ${(p) => p.duration / 1000}s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  h1,
  h2 {
    @media ${antdBreakpoints.mdMax} {
      padding: 0 15px;
    }
  }
  h1 {
    color: ${({ theme }) => theme.colors.text.dark};
    font-weight: 800;
    font-size: 2em;
    @media ${antdBreakpoints.mdMax} {
      font-size: 1.8em;
      margin-top: 15px;
      margin-bottom: 25px;
    }

    line-height: 1.3em;
  }
  h3 {
    font-weight: 400;
    font-size: 1.3em;
    height: 40px;
    display: flex;
    align-items: center;
    @media ${antdBreakpoints.lgMax} {
      font-size: 1.2em;
      line-height: 1.3em;
      height: 50px;
    }
    @media ${antdBreakpoints.mdMax} {
      font-size: 1.1em;
      justify-content: center;
      margin-top: 10px;
    }
  }
  .button {
    padding-top: 35px;
    @media ${antdBreakpoints.mdMax} {
      display: flex;
      justify-content: center;
      padding-bottom: 20px;
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* flex: 0; */
  width: 100%;
  height: 100%;
`;

const Slide = ({ slide, duration }: { slide: SlideType; duration: number }) => {
  const { title, subTitle, button } = slide;

  return (
    <SlideStyled key={title} duration={duration}>
      <h1 className="title">{title}</h1>
      <h3 className="subTitle slide-in-left">{subTitle}</h3>
      <div className="button">{button}</div>
    </SlideStyled>
  );
};

const MainTextsSlider: FunctionComponent<Props> = ({
  slides,
  duration = 3500,
}) => {
  const currentSlideIndex = useSlider(duration);

  return (
    <Wrapper>
      <Slide
        slide={slides[currentSlideIndex % slides.length]}
        key={currentSlideIndex}
        duration={duration}
      />
    </Wrapper>
  );
};

export default MainTextsSlider;
