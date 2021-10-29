import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  FunctionComponent,
  RefObject,
  useCallback,
} from "react";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

type ColorScheme = {
  background: string;
};

const buttonStyled = css<{
  mobile: boolean;
  colorScheme?: ColorScheme;
  isHighlighted?: boolean;
  disabled: boolean;
}>`
  font-size: ${({ mobile }) => (mobile ? 0.8 : 1)}em;
  padding: ${({ mobile }) => (mobile ? "5px 5px" : "5px 20px")};
  text-align: center;
`;

const Highlighter = styled(motion.div)`
  ${buttonStyled}
  --background:${({ colorScheme }) => colorScheme?.background};
  border-radius: 50px;
  position: absolute;
  height: 93%;
  top: 0px;
  padding: 2px;
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

const Buttons = styled.div<{ colorScheme: ColorScheme }>`
  --background: ${(p) => p.colorScheme.background};
  display: flex;
  justify-content: center;
  /* height: 100%; */
  background: var(--background);
  border-radius: 50px;
  gap: 0 10px;
  /* width: 100%; */
`;

const Element = styled.div`
  ${buttonStyled}
  --color: white;
  color: ${({ isHighlighted, theme }) =>
    isHighlighted ? "var(--color)" : theme.colors.text.midDarkBlue}!important;
  /* padding: 5px 10px; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: yellow; */
  z-index: 1 !important;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  font-weight: 600;
  opacity: ${({ isHighlighted, disabled }) =>
    isHighlighted ? 1 : disabled ? 0.5 : 0.85};
  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.85 : 1)};
  }
`;

type Props = {
  labelLeft: string;
  labelRight: string;
  changeActive: (e: number) => void;
  active: number;
  colorScheme: {
    background: string;
    clicked: string;
  };
};

const TwoStateSlideAnimatedButton: FunctionComponent<Props> = ({
  changeActive,
  active,
  colorScheme,
  labelLeft,
  labelRight,
}) => {
  const menuElements: {
    label: string;
    key: string;
    disabled: boolean;
    action?: any;
    hide?: boolean;
  }[] = [
    {
      label: labelLeft,
      key: labelLeft,
      disabled: false,
      action: null,
      hide: false,
    },
    {
      label: labelRight,
      key: labelLeft,
      disabled: false,
      action: null,
      hide: false,
    },
    // {
    //   label: "2Yearly",
    //   key: "2year",
    // },
  ];

  const { background, clicked } = colorScheme;
  const sizes = { width: 500, height: 10 };
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
    width: number;
    i: number;
  }>({ x: 0, y: 0, width: 0, i: 0 });
  const [highlighted, setHighlighted] = useState(0);
  let usernameRefs = useRef<RefObject<HTMLDivElement>[]>([]);

  const moveMouse = useCallback(() => {
    // const i = menuElements.findIndex((x) => x.key === active);
    const el = usernameRefs.current[active]?.current;

    setMousePosition({
      y: 744,
      x: el?.offsetLeft || 0,
      width: el?.clientWidth ? el.clientWidth - 2 : 0,
      i: active,
    });
    setHighlighted(active);
    // }
  }, [active]);

  useEffect(() => {
    let mounted = true;
    usernameRefs.current = menuElements.map(
      (ref, index) =>
        (usernameRefs.current[index] = React.createRef<HTMLDivElement>())
    );
    setTimeout(() => {
      if (mounted) {
        moveMouse();
      }
    }, 100);

    return () => {
      mounted = false;
    };
  }, [moveMouse]);

  useEffect(() => {
    moveMouse();
  }, [active, moveMouse]);

  useEffect(() => {
    moveMouse();
  }, [sizes?.width, moveMouse]);

  const handleClick = (i: number) => {
    const isDisabled = menuElements[i].disabled;
    if (isDisabled) return false;
    menuElements[i].action ? menuElements[i].action(i) : changeActive(i);
  };

  return (
    <Row id="verticalSlidingMenuRowXL">
      <Buttons colorScheme={{ background }}>
        {menuElements.map((el, index) => {
          const { hide, disabled, label } = el;
          if (hide) {
            return <div key={label}></div>;
          } else {
            return (
              <Element
                key={label}
                mobile={false}
                disabled={disabled}
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
        disabled={false}
        mobile={false}
        colorScheme={{ background: clicked }}
        transition={{
          // bounceDamping: 5,
          duration: 0.2,
          // ease: "easeOut",
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
