import styled from "styled-components";
import { FunctionComponent } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

type Props = {
  width: number;
  height: number;
};

const Wrapper = styled(motion.div)<{ height: number; width: number }>`
  /* position: relative; */
  display: flex;
  /* height: 100%; */
  /* width: 100%; */
  max-height: ${(p) => p.height}px;
  max-width: ${(p) => p.width}px;
  /* background-color: red; */
  align-items: center;
  justify-content: center;
  /* img {
    width: 50%;
  } */
`;

const Perspective: FunctionComponent<Props> = ({ children, width, height }) => {
  const x = useMotionValue(width / 2);
  const y = useMotionValue(height / 2);

  const rotateX = useTransform(y, [0, height], [5, -5]);
  const rotateY = useTransform(x, [0, width], [-5, 5]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <Wrapper
      width={width}
      height={height}
      style={{
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        perspective: width,
      }}
      onMouseMove={handleMouse}
    >
      <motion.div
        style={{
          // width: 250,
          // height: 250,
          // borderRadius: 30,
          // backgroundColor: "#1ea06a",
          rotateX: rotateX,
          rotateY: rotateY,
          // position: "absolute",
          // translateZ: translateZ,
          // rotateZ: rotateY,
          // translateZ: -500,
        }}
      >
        {children}
      </motion.div>
    </Wrapper>
  );
};

export default Perspective;
