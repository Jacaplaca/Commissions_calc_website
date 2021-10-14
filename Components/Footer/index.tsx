import Link from "next/link";
import styled from "styled-components";
import { cloneElement, FunctionComponent } from "react";
import footerContent from "../../data/footerContent";
import { FacebookFBrands } from "../NoCopy/Icons";
import { useTranslation } from "react-i18next";

type Props = {};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.palette.darkBlue.main};
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  .divider {
    border-top: 1px solid white;
    opacity: 0.3;
    width: 100%;
    flex: auto;
  }
`;

const LinkStyled = styled.div`
  a {
    transition: opacity 0.2s linear;
  }
  a:hover {
    color: inherit;
    opacity: 0.74;
  }
`;

const Main = styled.section`
  display: flex;
  max-width: ${(p) => p.theme.sizes.headerWidth};
  color: white;
  justify-content: space-between;
  width: 100%;
  padding: 35px 15px;
  .column {
    .columnTitle {
      text-transform: uppercase;
      font-weight: 600;
      opacity: 0.6;
      margin-bottom: 12px;
      font-size: 1em;
    }
    .links {
      /* .link {
        
      } */
    }
  }
`;

const Bottom = styled.section`
  display: flex;
  flex-direction: row;
  max-width: ${(p) => p.theme.sizes.headerWidth};
  color: white;
  width: 100%;
  padding: 15px 15px;
  padding-bottom: 35px;
  justify-content: space-between;
  .socialsIcons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .bottomLeft {
    display: flex;
    flex-direction: column;
    .claim {
      /* font-size: 1.4em !important; */
      color: white;
      opacity: 0.45;
    }
    .bottomLinks {
      .copyright {
        /* font-size: 1.2em; */
        font-weight: 400;
      }
      gap: 0 20px;
      display: flex;
      flex-direction: row;
    }
  }
`;

const Icon = styled(({ component, ...props }) =>
  cloneElement(component, props)
)`
  font-size: 1.1em !important;
  color: white;
  opacity: 0.7;
`;

const Footer: FunctionComponent<Props> = ({}) => {
  return (
    <Wrapper>
      <Main>
        {footerContent.map((el) => {
          const { title, links } = el;
          return (
            <div key={title} className="column">
              <div className="columnTitle">{title}</div>
              <div className="links">
                {links.map((link) => {
                  const { path, label } = link;
                  return (
                    <LinkStyled key={label}>
                      <Link href={path}>
                        <a>{label}</a>
                      </Link>
                    </LinkStyled>
                  );
                })}
              </div>
            </div>
          );
        })}
      </Main>
      <div className="divider"></div>
      <Bottom>
        <div className="bottomLeft">
          <h4 className="claim">Some Bold Statement</h4>
          <div className="bottomLinks">
            <div className="copyright">CalcAider©2021</div>
            <LinkStyled className="bottomLink">
              <Link href={"/"}>
                <a>Privacy Policy</a>
              </Link>
            </LinkStyled>
            <LinkStyled className="bottomLink">
              <Link href={"/"}>
                <a>Terms of Service</a>
              </Link>
            </LinkStyled>
          </div>
        </div>
        <div className="socialsIcons">
          <Icon
            component={<FacebookFBrands />}
            // rotate={isActive ? 180 : 0}
          />
        </div>
      </Bottom>
    </Wrapper>
  );
};

export default Footer;
