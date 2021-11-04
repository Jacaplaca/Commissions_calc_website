import styled from "styled-components";
import { FunctionComponent, MouseEvent } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

type Props = {
  width: number;
  height: number;
};

const Wrapper = styled(motion.div)<{ height: number; width: number }>`
  display: flex;
  max-height: ${(p) => p.height}px;
  max-width: ${(p) => p.width}px;
  align-items: center;
  justify-content: center;
`;

const Perspective: FunctionComponent<Props> = ({ children, width, height }) => {
  const x = useMotionValue(width / 2);
  const y = useMotionValue(height / 2);

  const rotateX = useTransform(y, [0, height], [5, -5]);
  const rotateY = useTransform(x, [0, width], [-5, 5]);

  function handleMouse(event: MouseEvent) {
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
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      >
        {children}
      </motion.div>
    </Wrapper>
  );
};

export default Perspective;
