import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const RecommendedStyled = styled(motion.div)`
  --background: darkblue;
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

  .recommended__content {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 3px;
    padding-top: 7px;
    padding-bottom: 7px;
    text-align: center;
    background-color: var(--background);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }
`;

const Recommended = ({ visible }) => {
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
      <div className="recommended__content">Recommended</div>
    </RecommendedStyled>
  );
};

export default Recommended;
