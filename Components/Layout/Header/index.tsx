import styled from "styled-components";
import Image from "next/image";
import { FunctionComponent } from "react";
import MainMenu from "../../Navigations/MainMenu";

type Props = {};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  max-width: ${(p) => p.theme.sizes.headerWidth};
  /* padding: 0 20px; */
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
  /* background: aqua; */
  /* margin: 0 auto; */
  display: flex;
  justify-content: center;
  top: 65px;
  z-index: 1;
`;

const Header: FunctionComponent<Props> = ({}) => {
  return (
    <Wrapper>
      <div className="content">
        <Image
          src="/calcaider_logo.svg"
          alt="CalcAider Logo"
          width={127 * 1.45}
          height={22 * 1.45}
        />
        <MainMenu />
      </div>
      <PortalStyled
        // style={{ position: "relative" }}
        id="portal_subMenu"
        // style={{ height: 300, width: 300 }}
      />
    </Wrapper>
  );
};

export default Header;
