import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { transparentize } from "polished";
import { useRouter } from "next/router";

type Props = {
  mobile?: boolean;
};

const Arrow = styled.div`
  z-index: 0;
  position: relative;
  &::before {
    transform: rotate(45deg);
    content: "";
    width: 10px;
    height: 10px;
    background: white;
    position: absolute;
    top: -5px;
    left: 15px;
    box-shadow: ${({ theme }) => theme.shadows.subMenu};
  }
`;
const Wrapper = styled.section<{ mobile?: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ mobile }) => (mobile ? "transparent" : "white")};
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: ${({ theme }) => theme.shadows.subMenu};
  position: relative;
  z-index: 1;
`;

const Row = styled.button<{ mobile?: boolean }>`
  outline: none;
  cursor: pointer;
  background: transparent;
  border: 0px;
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 0px 15px;
  padding: 10px ${({ mobile }) => (mobile ? 25 : 15)}px;
  padding-bottom: 8px;
  opacity: 0.7;
  transition: all 0.2s;
  background: ${({ theme }) => "transparent"};
  width: 100%;
  &:hover {
    opacity: 1;
    background: ${({ theme }) =>
      transparentize(0.95, theme.colors.palette.darkBlue.main)};
  }

  .languageRow__content {
    justify-content: space-between;
    width: 70px;
    display: flex;
    align-items: center;
    gap: 0px 15px;
    img {
      width: 20px;
      height: 20px;
    }
    .language {
      text-transform: uppercase;
      font-weight: 700;
    }
  }
`;

const LanguageSwitcher: FunctionComponent<Props> = ({ mobile }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      {!mobile && <Arrow />}
      <Wrapper mobile={mobile}>
        <Link href={`${pathname}`} locale={false}>
          <a>
            <Row mobile={mobile}>
              <div className="languageRow__content">
                <img src={"/langs/en.png"} alt="eng_flag" />
                <div className="language">EN</div>
              </div>
            </Row>
          </a>
        </Link>

        <Link href={`${pathname}`} locale={"pl"}>
          <a>
            <Row mobile={mobile}>
              <div className="languageRow__content">
                <img src={"/langs/pl.png"} alt="pl_flag" />
                <div className="language">PL</div>
              </div>
            </Row>
          </a>
        </Link>
      </Wrapper>
    </>
  );
};

export default LanguageSwitcher;
