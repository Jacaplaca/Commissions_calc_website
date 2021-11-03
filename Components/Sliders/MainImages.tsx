import styled from "styled-components";
import { FunctionComponent, useEffect, useState } from "react";
import useSlider from "../../hooks/useSlider";
import Image from "next/image";

type Props = {
  slides: string[];
  duration?: number;
};

const Wrapper = styled.section<{ duration: number }>`
  display: flex;
  position: relative;

  @keyframes flickerAnimation {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    95% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .animate-flicker {
    opacity: 0;
    animation: flickerAnimation ${(p) => p.duration / 1000}s infinite;
  }

  img {
    /* position: absolute; */
    width: 100%;
    height: 100%;
  }
`;

const MainImagesSlider: FunctionComponent<Props> = ({
  slides,
  duration = 3500,
}) => {
  // const currentSlideIndex = 1;
  const currentSlideIndex = useSlider(duration);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Wrapper duration={duration}>
      {/* {slides[0]} */}

      {/* <img
        src={slides[currentSlideIndex % slides.length]}
        key={`slideImageFront__${currentSlideIndex}`}
        className="animate-flicker"
      /> */}
      <Image
        className="animate-flicker"
        // loader={myLoader}
        key={`slideImageFront__${currentSlideIndex}`}
        src={slides[currentSlideIndex % slides.length]}
        alt="Picture of the author"
        width={570}
        height={570}
      />
    </Wrapper>
  );
};

export default MainImagesSlider;
