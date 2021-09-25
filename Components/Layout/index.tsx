import styled from "styled-components";
import { FunctionComponent, useEffect, useState } from "react";
import Header from "./Header";
import { AnimatePresence, motion } from "framer-motion";
import usePrevious from "../../hooks/usePrevious";
import { useMainContext } from "../../contexts/main";

type Props = {
  backgroundColor: string;
};
const Wrapper = styled(motion.main)`
  display: flex;
  flex-direction: column;
  /* padding: 15px; */
  padding-top: 25px;
  width: 100%;
  align-items: center;
  flex: 0;
`;

const Container = styled(motion.div)`
  width: 100%;
`;

const Layout: FunctionComponent<Props> = ({ children, backgroundColor }) => {
  // const [currentBackgroundColor, setCurrentBackground] = useState("#ffffff");
  const { background, updateBackground } = useMainContext();

  const prevBackground = usePrevious(background);
  // console.log("Layout", prevBackground);

  useEffect(() => {
    updateBackground(backgroundColor);
  }, [backgroundColor, updateBackground]);
  const variants = {
    // hidden: { opacity: 1, background: "blue" },
    // enter: { opacity: 1, background: "red" },
    hidden: { opacity: 0, x: -50, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -50 },
  };
  return (
    <Wrapper
      animate={{ background: [prevBackground, backgroundColor] }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Container
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear" }} // Set the transition to linear
      >
        {children}
      </Container>
    </Wrapper>
  );
};

export default Layout;
