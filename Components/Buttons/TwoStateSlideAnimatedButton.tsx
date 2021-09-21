import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const buttonStyled = css`
  font-size: ${({ mobile }) => (mobile ? 0.8 : 1)}em;
  padding: ${({ mobile }) => (mobile ? "5px 5px" : "5px 20px")};
  text-align: center;
`;

const Highlighter = styled(motion.div)`
  ${buttonStyled}
  --background:darkblue;
  border-radius: 50px;
  position: absolute;
  height: 93%;
  top: 0px;
  padding: 2px;
  ${(props) => props.addCss}
  .content {
    background-color: var(--background);
    height: 100%;
    border-radius: 50px;
    width: 100%;
  }
`;

const Row = styled(motion.div)`
  /* background-color: green; */
  /* width: 100%; */
  min-height: 34px;
  position: relative;
  width: fit-content;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  /* height: 100%; */
  background: lightblue;
  border-radius: 50px;
  /* width: 100%; */
`;

const Element = styled.div`
  ${buttonStyled}
  --color: ${({ colorScheme, theme }) =>
    colorScheme?.activeColor ? colorScheme?.activeColor : "white"};
  color: ${({ isHighlighted }) => (isHighlighted ? "var(--color)" : "black")};
  /* padding: 5px 10px; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: yellow; */
  z-index: 2;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  font-weight: 500;
  opacity: ${({ isHighlighted, disabled }) =>
    isHighlighted ? 1 : disabled ? 0.5 : 0.7};
  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  }
`;

const menuElements = [
  {
    label: "Monthly",
    key: "monthly",
  },
  {
    label: "Yearly",
    key: "yearly",
  },
  // {
  //   label: "2Yearly",
  //   key: "2year",
  // },
];

const TwoStateSlideAnimatedButton = ({ changeActive, active }) => {
  const sizes = { width: 500, height: 10 };
  const [mousePosition, setMousePosition] = useState({});
  const [highlighted, setHighlighted] = useState(0);
  // const [active, setActive] = useState(0);
  let usernameRefs = useRef([]);
  // const [resizeListener, sizes] = useResizeObserver(350);

  // const action = (i) => {
  //   changeActi(i);
  // };

  const moveMouse = () => {
    // const i = menuElements.findIndex((x) => x.key === active);
    const el = usernameRefs.current[active]?.current;

    setMousePosition({
      x: el?.offsetLeft,
      y: 744,
      width: el?.clientWidth - 2,
      i: active,
    });
    setHighlighted(active);
    // }
  };

  useEffect(() => {
    let mounted = true;
    usernameRefs.current = menuElements.map(
      (ref, index) => (usernameRefs.current[index] = React.createRef())
    );
    setTimeout(() => {
      if (mounted) {
        moveMouse();
      }
    }, 100);

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    moveMouse();
  }, [active]);

  useLayoutEffect(() => {
    moveMouse();
  }, [sizes?.width, menuElements]);

  const handleClick = (i) => {
    const isDisabled = menuElements[i].disabled;
    console.log(
      "🚀 ~ file: TwoStateSlideAnimatedButton.tsx ~ line 124 ~ handleClick ~ i",
      i
    );
    if (isDisabled) return false;
    menuElements[i].action ? menuElements[i].action(i) : changeActive(i);
  };

  return (
    <Row id="verticalSlidingMenuRowXL">
      {/* {resizeListener} */}
      {/* Your content here. (div sizes are {sizes.width} x {sizes.height}) */}
      <Buttons>
        {menuElements.map((el, index) => {
          const { hide, disabled, label, colorScheme } = el;
          if (hide) {
            return <div key={label}></div>;
          } else {
            return (
              <Element
                key={label}
                disabled={disabled}
                colorScheme={colorScheme}
                isHighlighted={index === highlighted}
                ref={usernameRefs.current[index]}
                style={{ zIndex: 2 }}
                onClick={() => handleClick(index)}
              >
                {label}
              </Element>
            );
          }
        })}
      </Buttons>
      <Highlighter
        colorScheme={menuElements[highlighted]?.colorScheme}
        transition={{
          bounceDamping: 5,
          duration: 0.2,
          ease: "easeOut",
        }}
        animate={{
          x: mousePosition.x,
          width: mousePosition.width || 0,
        }}
      >
        <div className="content"></div>
      </Highlighter>
    </Row>
  );
};

export default TwoStateSlideAnimatedButton;
