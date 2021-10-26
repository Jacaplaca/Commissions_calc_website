import { motion } from "framer-motion";
import { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";

const RecommendedStyled = styled(motion.div)<{ visible: boolean }>`
  --background: ${(p) => p.theme.colors.palette.pricing.dark};
  /* --background: ${({ visible }) =>
    visible ? "darkblue" : "transparent"}; */
  position: absolute;
  top: 0;
  width: calc(100% + 2px);
  left: -1px;
  color: white;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-color: "green"; */
  /* border-width: 0px !important; */
  /* border: 1px solid ${(p) =>
    p.visible ? "var(--background)" : "transparent"}; */

  .recommended__content {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 3px;
    padding-top: 7px;
    padding-bottom: 7px;
    text-align: center;
    background-color: ${(p) =>
      p.visible ? "var(--background)" : "transparent"};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border: ${(p) => (p.visible ? 1 : 0)}px solid
      ${(p) => (p.visible ? "var(--background)" : "transparent")};
    /* border: 1px solid
      ${(p) => (p.visible ? "var(--background)" : "transparent")}; */
  }
`;

type Props = {
  visible: boolean;
  label: string;
};

const Recommended: FunctionComponent<Props> = ({ visible, label }) => {
  const [y, setY] = useState(0);

  useEffect(() => {
    setY(visible ? -35 : 0);
  }, [visible]);

  return (
    <RecommendedStyled
      visible={visible}
      // onClick={() => setY(-25)}
      transition={{
        bounceDamping: 5,
        duration: 0.2,
        ease: "easeOut",
      }}
      animate={{
        y,
      }}
    >
      <div className="recommended__content">{label}</div>
    </RecommendedStyled>
  );
};

export default Recommended;
