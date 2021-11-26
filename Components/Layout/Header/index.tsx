import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { FunctionComponent } from "react";
import MainMenu from "../../Navigations/MainMenu";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import MainMenuMobile from "../../Navigations/MainMenuMobile";

const APPNAME = process.env.NEXT_PUBLIC_APPNAME;

type Props = {};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: ${(p) => p.theme.sizes.headerWidth};
  flex: 0;
  width: 100%;
  position: relative;
  .content {
    display: flex;
    justify-content: space-between;
    max-width: ${(p) => p.theme.sizes.headerWidth};
    padding: 0 20px;
    flex: 0;
    width: 100%;
  }
`;

const PortalStyled = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  top: 65px;
  z-index: 2;
`;

const divider = 6;

const Header: FunctionComponent<Props> = ({}) => {
  const screen = useBreakpoint();
  return (
    <Wrapper>
      <div className="content">
        <Link href={`/`}>
          <a>
            <Image
              src="/calcaider_logo2.svg"
              alt={`company_logo`}
              width={1191 / divider}
              height={228 / divider}
            />
          </a>
        </Link>
        {screen.lg ? <MainMenu /> : <MainMenuMobile />}
      </div>
      <PortalStyled id="portal_subMenu" />
    </Wrapper>
  );
};

export default Header;
