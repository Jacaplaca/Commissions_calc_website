import Link from "next/link";
import styled from "styled-components";
import { cloneElement, FunctionComponent } from "react";
import { FacebookFBrands } from "../Icons";
import { useTranslation } from "react-i18next";
import useFooterElements from "./useFooterElements";
import paths from "../../data/paths";

const appName = process.env.NEXT_PUBLIC_APPNAME;

type Props = {};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.palette.darkBlue.main};
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
  padding: 1.8px 0;
  a {
    transition: opacity 0.2s linear;
    font-size: 0.87em;
    font-weight: 600;
  }
  a:hover {
    color: inherit;
    opacity: 0.74;
  }
`;

const Main = styled.section`
  display: flex;
  max-width: ${(p) => p.theme.sizes.headerWidth};
  color: ${({ theme }) => theme.colors.text.light};
  justify-content: space-between;
  width: 100%;
  padding: 35px 20px;
  flex-wrap: wrap;
  gap: 25px 15px;
  .column {
    min-width: 100px;
    .columnTitle {
      text-transform: uppercase;
      font-weight: 600;
      opacity: 0.6;
      margin-bottom: 12px;
      font-size: 1em;
    }
  }
`;

const Bottom = styled.section`
  display: flex;
  flex-direction: row;
  max-width: ${(p) => p.theme.sizes.headerWidth};
  color: ${({ theme }) => theme.colors.text.light};
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
      color: white;
      opacity: 0.45;
    }
    .bottomLinks {
      flex-wrap: wrap;
      align-items: baseline;
      .copyright {
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
  const { t } = useTranslation(["common", "subMenu", "footer"]);
  const footerContent = useFooterElements();
  return (
    <Wrapper>
      <Main>
        {footerContent.map((el) => {
          const { title, links } = el;
          return (
            <div key={title} className="column">
              <div className="columnTitle">{t(title)}</div>
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
            <div className="copyright">{`${appName} ©2021`}</div>
            <LinkStyled className="bottomLink">
              <Link href={paths.privacy}>
                <a>{t("footer:privacy")}</a>
              </Link>
            </LinkStyled>
            <LinkStyled className="bottomLink">
              <Link href={paths.terms}>
                <a>{t("footer:terms")}</a>
              </Link>
            </LinkStyled>
          </div>
        </div>
        <div className="socialsIcons">
          <Icon component={<FacebookFBrands />} />
        </div>
      </Bottom>
    </Wrapper>
  );
};

export default Footer;
