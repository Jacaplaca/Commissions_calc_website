import styled from "styled-components";
import { FunctionComponent, useEffect, useState } from "react";
import Header from "./Header";
import { AnimatePresence, motion } from "framer-motion";
import usePrevious from "../../hooks/usePrevious";
import { useMainContext } from "../../contexts/main";

type Props = {};
const Wrapper = styled(motion.main)`
  display: flex;
  flex-direction: column;
  padding: 15px;
  padding-top: 25px;
  width: 100%;
  align-items: center;
  /* overflow: overlay; */
  /* background: ${({ backgroundColor }) => backgroundColor}; */
  /* transition: all 1s; */
`;

const Container = styled(motion.div)``;

const Layout: FunctionComponent<Props> = ({ children, backgroundColor }) => {
  // const [currentBackgroundColor, setCurrentBackground] = useState("#ffffff");
  const { background, updateBackground } = useMainContext();

  const prevBackground = usePrevious(background);
  // console.log("Layout", prevBackground);

  useEffect(() => {
    updateBackground(backgroundColor);
  }, [backgroundColor]);
  const variants = {
    // hidden: { opacity: 1, background: "blue" },
    // enter: { opacity: 1, background: "red" },
    hidden: { opacity: 0, x: -50, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -50 },
  };
  return (
    // <AnimatePresence
    //   exitBeforeEnter
    //   initial={false}
    //   // onExitComplete={() => window.scrollTo(0, 0)}
    // >
    // <Wrapper
    //   variants={variants} // Pass the variant object into Framer Motion
    //   initial="hidden" // Set the initial state to variants.hidden
    //   animate="enter" // Animated state to variants.enter
    //   exit="exit" // Exit state (used later) to variants.exit
    //   transition={{ type: "linear", duration: 1 }} // Set the transition to linear
    //   className=""
    //   // backgroundColor={backgroundColor}
    // >
    //   <Header />
    //   {children}
    // </Wrapper>
    // </AnimatePresence>

    <Wrapper
      // initial="pageInitial"
      // animate="pageAnimate"
      animate={{ background: [prevBackground, backgroundColor] }}
      // variants={{
      //   pageInitial: {
      //     backgroundColor: "black",
      //     opacity: 1,
      //   },
      //   pageAnimate: {
      //     backgroundColor,
      //     opacity: 1,
      //   },
      // }}
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
