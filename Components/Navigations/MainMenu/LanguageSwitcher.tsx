import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { transparentize } from "polished";
import { useRouter } from "next/router";

type Props = {};

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
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: ${({ theme }) => theme.shadows.subMenu};
  position: relative;
`;

const Row = styled.button`
  outline: none;
  cursor: pointer;
  display: flex;
  background: transparent;
  border: 0px;
  justify-content: space-between;
  align-items: center;
  gap: 0px 15px;
  padding: 10px 15px;
  padding-bottom: 8px;
  opacity: 0.7;
  transition: all 0.2s;
  background: ${({ theme }) => "transparent"};
  &:hover {
    opacity: 1;
    background: ${({ theme }) =>
      transparentize(0.95, theme.colors.palette.darkBlue.main)};
  }

  img {
    width: 20px;
    height: 20px;
  }
  .language {
    text-transform: uppercase;
    font-weight: 700;
  }
`;

const LanguageSwitcher: FunctionComponent<Props> = ({}) => {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  console.log("🚀 ~ file: LanguageSwitcher.tsx ~ line 70 ~ router", router);
  const { pathname } = router;

  return (
    <>
      <Arrow />
      <Wrapper>
        <Link href={`${pathname}`} locale={false}>
          <a>
            <Row
            // onClick={() => i18n.changeLanguage("en")}
            >
              <img src={"/langs/en.png"} alt="eng_flag" />
              <div className="language">EN</div>
            </Row>
          </a>
        </Link>

        <Link href={`pl${pathname}`} locale={false}>
          <a>
            <Row
            // onClick={() => i18n.changeLanguage("pl")}
            >
              <img src={"/langs/pl.png"} alt="pl_flag" />
              <div className="language">PL</div>
            </Row>
          </a>
        </Link>
      </Wrapper>
    </>
  );
};

export default LanguageSwitcher;
