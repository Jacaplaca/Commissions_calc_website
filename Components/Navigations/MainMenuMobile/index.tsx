import Link from "next/link";
import styled, { css } from "styled-components";
import { cloneElement, FunctionComponent, useState } from "react";
import { BarsRegular, ChevronRightRegular } from "../../Icons";
import HamburgerAnimated from "../../Icons/HamburgerAnimated";
import useMainMenuElements from "../useMainMenuElements";
import { useTranslation } from "react-i18next";
import MainNavigationBigButton from "../../Buttons/MainNavigationBigButton";
import { lighten, transparentize } from "polished";

type Props = {};

const SLIDERIGHTANIMATIONDURATION = 300;

const Wrapper = styled.section`
  display: flex;
  /* transform: scale(50%); */
  flex-direction: column;
  /* position: relative; */

  @-webkit-keyframes swing-in-top-fwd {
    0% {
      transform: rotateX(-100deg);
      transform-origin: top;
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg);
      transform-origin: top;
      opacity: 1;
    }
  }
  @keyframes swing-in-top-fwd {
    0% {
      transform: rotateX(-100deg);
      transform-origin: top;
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg);
      transform-origin: top;
      opacity: 1;
    }
  }

  @-webkit-keyframes swing-out-top-bck {
    0% {
      transform: rotateX(0deg);
      transform-origin: top;
      opacity: 1;
    }
    100% {
      transform: rotateX(-100deg);
      transform-origin: top;
      opacity: 0;
    }
  }
  @keyframes swing-out-top-bck {
    0% {
      transform: rotateX(0deg);
      transform-origin: top;
      opacity: 1;
    }
    100% {
      transform: rotateX(-100deg);
      transform-origin: top;
      opacity: 0;
    }
  }

  .hide {
    display: none;
  }

  .swing-in-top-fwd {
    animation: swing-in-top-fwd ${SLIDERIGHTANIMATIONDURATION / 1000}s
      cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  }

  .swing-out-top-bck {
    animation: swing-out-top-bck ${SLIDERIGHTANIMATIONDURATION / 1000}s
      cubic-bezier(0.6, -0.28, 0.735, 0.045) both;
  }

  //from right and out

  @-webkit-keyframes slide-in-right {
    0% {
      transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-right {
    0% {
      transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .slide-in-right {
    animation: slide-in-right ${SLIDERIGHTANIMATIONDURATION / 1000}s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @-webkit-keyframes slide-out-right {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(1000px);
      opacity: 0;
    }
  }
  @keyframes slide-out-right {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(1000px);
      opacity: 0;
    }
  }

  .slide-out-right {
    animation: slide-out-right ${SLIDERIGHTANIMATIONDURATION / 1000}s
      cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }
`;

const menuContainer = css`
  background: white;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  width: 100%;
  position: absolute;
`;

const Menu = styled.div`
  ${menuContainer};
  box-shadow: ${({ theme }) => theme.shadows.subMenu};
  top: 50px;
  left: 0;
  right: 0;
  z-index: 2;
  .bigButton {
    width: 100%;
    display: flex;
    padding: 10px 0;
    justify-content: center;
  }
  padding-bottom: 10px;
`;

const ChevronRightRegularStyled = styled(ChevronRightRegular)`
  font-size: 0.8em !important;
`;

const MenuElement = styled.button`
  cursor: pointer;
  outline: none;
  background: transparent;
  font-size: 0.825em;
  font-weight: 600;
  border: 0px solid transparent;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColors.lightGrey};
  padding: 15px 25px;
  padding-right: 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .label {
    opacity: 0.7;
  }
  .icon {
  }
`;

const SubStyled = styled.div<{ big?: boolean }>`
  ${menuContainer};
  box-shadow: ${({ theme, big }) => big && theme.shadows.subMenu};
  z-index: 3;
  height: ${({ big }) => (big ? "70vh" : "auto")};
  .subStyled__content {
    display: block;
    height: 100%;
    overflow: auto;
    .subStyled__content__menu {
      padding-top: 60px;
    }
  }
`;

const ChevronLeftStyled = styled(ChevronRightRegular)`
  transform: rotate(180deg);
  font-size: 1em !important; ;
`;

const BackButton = styled.button`
  position: fixed;
  display: flex;
  outline: none;
  background: ${({ theme }) => lighten(0.15, theme.colors.palette.blue.light)};
  width: 100%;
  border: none;
  z-index: 4;
  align-items: center;
  padding: 20px;
  padding-left: 25px;
  .backButton_icon {
    display: flex;
    align-items: center;
    opacity: 0.7;
  }
  .backButton_label {
    padding-left: 10px;
    text-transform: uppercase;
    font-size: 0.9em;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.dark};
  }
`;

const Sub: FunctionComponent<{ goBack: () => void; big?: boolean }> = ({
  children,
  goBack,
  big,
}) => {
  const [classes, setClasses] = useState("slide-in-right");
  const {
    t,
    i18n: { language },
  } = useTranslation("common");

  const handleBack = () => {
    setClasses("slide-out-right ");
    goBack();
  };

  return (
    <SubStyled className={classes} big={big}>
      <div className="subStyled__content">
        <BackButton onClick={handleBack}>
          <div className="backButton_icon">
            <ChevronLeftStyled />
          </div>
          <div className="backButton_label">{t("goBackButtonLabel")}</div>
        </BackButton>
        <div className="subStyled__content__menu">
          {cloneElement(children as React.ReactElement<any>, { mobile: true })}
        </div>
      </div>
    </SubStyled>
  );
};

const MainMenuMobile: FunctionComponent<Props> = ({}) => {
  const { elements, featuresOpened, closeSubMenu } = useMainMenuElements();
  const {
    t,
    i18n: { language },
  } = useTranslation("common");

  const [opened, setOpened] = useState(false);
  const [menuClasses, setMenuClasses] = useState("hide");
  const [menuElementClass, setMenuElementClass] = useState("");

  const handleOpenMenu = () => {
    console.log("handleOpen");
    // opened ? "swing-in-top-fwd" : 'swing-out-top-bck'
    opened
      ? setMenuClasses("swing-out-top-bck")
      : setMenuClasses("swing-in-top-fwd");
    opened
      ? setMenuElementClass("swing-out-top-bck")
      : setMenuElementClass("swing-in-top-fwd");

    closeSubMenu();

    setOpened((state) => !state);
    // "this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
  };

  const goBack = () => {
    setMenuElementClass("swing-in-top-fwd");
    setTimeout(() => {
      closeSubMenu();
    }, SLIDERIGHTANIMATIONDURATION);
  };

  const openSub = (action) => {
    setMenuElementClass("swing-out-top-bck");
    action();
  };

  return (
    <Wrapper>
      <div style={{ zIndex: 3 }}>
        <HamburgerAnimated opened={opened} onClick={handleOpenMenu} />
      </div>
      <Menu className={`${menuClasses}`}>
        {Boolean(featuresOpened) && (
          <Sub goBack={goBack} big={elements[featuresOpened - 1].centerSubMenu}>
            {elements[featuresOpened - 1].SubMenu}
          </Sub>
        )}
        {elements.map((element) => {
          const { label, action, key, SubMenu, centerSubMenu, link } = element;
          if (link) {
            return (
              <Link href={link} key={link} passHref>
                <MenuElement className={menuElementClass}>
                  <div className="label">{label}</div>
                  <div className="icon" />
                </MenuElement>
              </Link>
            );
          }
          return (
            <MenuElement
              key={key}
              onClick={() => openSub(action)}
              className={menuElementClass}
            >
              <div className="label">{label}</div>
              <div className="icon">
                {SubMenu ? <ChevronRightRegularStyled /> : ""}
              </div>
            </MenuElement>
          );
        })}
        <div className={`bigButton ${menuElementClass}`}>
          <MainNavigationBigButton label={t("common:startFree")} mobile />
        </div>
      </Menu>
    </Wrapper>
  );
};

export default MainMenuMobile;
