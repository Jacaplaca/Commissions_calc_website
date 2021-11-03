import Image from "next/image";
import styled from "styled-components";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

type Props = {};

const width = 570;
const height = 570;

const Wrapper = styled(motion.div)`
  position: relative;
  display: flex;
  /* height: 100%; */
  /* width: 100%; */
  height: ${height}px;
  width: ${width}px;
  background-color: red;
  align-items: center;
  justify-content: center;
  img {
    width: 50%;
  }
`;

const ThreeDSlider: FunctionComponent<Props> = ({}) => {
  const x = useMotionValue(width / 2);
  const y = useMotionValue(height / 2);

  const rotateX = useTransform(y, [0, height], [15, -15]);
  const rotateY = useTransform(x, [0, width], [-15, 15]);
  const translateZ = useTransform(x, [0, width], [-150, 150]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <Wrapper
      style={{
        // width: 400,
        // height: 400,
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        borderRadius: 30,
        // backgroundColor: "rgba(255, 255, 255, 0.05)",
        perspective: width,
      }}
      onMouseMove={handleMouse}
    >
      <motion.div
        style={{
          width: 250,
          height: 250,
          borderRadius: 30,
          backgroundColor: "#1ea06a",
          rotateX: rotateX,
          rotateY: rotateY,
          position: "absolute",
          translateZ: translateZ,
          // rotateZ: rotateY,
          // translateZ: -500,
        }}
      />
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundColor: "#572525",
          rotateX: rotateX,
          rotateY: rotateY,
          position: "absolute",
          // translateZ: -10,
        }}
      />
    </Wrapper>
  );
};

export default ThreeDSlider;
