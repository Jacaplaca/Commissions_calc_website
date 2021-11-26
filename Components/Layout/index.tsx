import styled from "styled-components";
import { FunctionComponent, useEffect, useRef } from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import usePrevious from "../../hooks/usePrevious";
import { useMainContext } from "../../contexts/main";
import Footer from "../Footer";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { CommentAltLinesSolid } from "../Icons";
import ContactButton from "../Buttons/ContactButton";
const appName = process.env.NEXT_PUBLIC_APPNAME;

type Props = {
  backgroundColor: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  seoMore?: string;
};

const Wrapper = styled(motion.main)`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  width: 100%;
  align-items: center;
  flex: 0;
`;

const Container = styled(motion.div)`
  width: 100%;
`;

const Layout: FunctionComponent<Props> = ({
  children,
  backgroundColor,
  seoTitle,
  seoKeywords,
  seoDescription,
  seoMore,
}) => {
  const { t } = useTranslation(["common", "subMenu"]);
  const { background, updateBackground } = useMainContext();
  const prevBackground = usePrevious(background);
  const footerRef = useRef(null);

  useEffect(() => {
    updateBackground(backgroundColor);
  }, [backgroundColor, updateBackground]);

  const variants = {
    hidden: { opacity: 0, x: -50, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -50 },
  };

  return (
    <Wrapper
      animate={{ background: [prevBackground, backgroundColor] }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>{`${t(seoTitle || "")}` || appName}</title>
        <meta name="keywords" content={seoKeywords || ""} />
        <meta
          name="description"
          content={`${t(seoDescription || "")} | ${t(seoMore || "")}`}
        />
      </Head>
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
      {/* <div id="footerContainer" > */}
        <Footer refElement={footerRef}/>
      {/* </div> */}
      <ContactButton refToChangeColor={footerRef} />
    </Wrapper>
  );
};

export default Layout;
