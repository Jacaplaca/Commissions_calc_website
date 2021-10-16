import Link from "next/link";
import styled from "styled-components";
import { transparentize } from "polished";
import { cloneElement, FunctionComponent } from "react";
import useSubMenuElements from "./useSubMenuElements";

type Props = {};
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  .column {
    .title {
      text-transform: uppercase;
      padding-bottom: 25px;
      color: ${(p) => p.theme.colors.text.midDarkBlue};
      opacity: 0.5;
      font-size: 0.85em;
      font-weight: 700;
      letter-spacing: 0.1em;
    }
    .rows {
      display: flex;
      flex-direction: column;
      /* gap: 15px 0; */
    }
  }
`;

const LinkStyled = styled.a`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  border-left: 1px solid
    ${({ theme }) => transparentize(0.8, theme.colors.palette.darkBlue.main)};
  width: 300px;
  display: flex;
  margin-right: 25px;
  cursor: pointer;
  &:hover .icon {
    transform: scale(1.1);
  }
  &:hover .texts .headline {
    border-bottom: 1px solid
      ${({ theme }) => transparentize(0.6, theme.colors.palette.darkBlue.main)};
  }
  .icon {
    transition: transform 0.15s;
    position: relative;
    height: fit-content;
    margin-right: 15px;
    /* .content {
    } */
    /* .background {
      top: 0;
      left: 0;
      position: absolute;
      background: red;
      clip-path: circle(50% at 50% 50%);
    } */
  }
  .fa-primary {
    color: ${({ theme }) => theme.colors.palette.orange.main};
    opacity: 0.5;
  }
  .fa-secondary {
    color: ${({ theme }) => theme.colors.palette.blue.main};
    opacity: 0.8;
  }
  .texts {
    .headline {
      font-size: 1.08em;
      color: ${({ theme }) => theme.colors.palette.darkBlue.main};
      font-weight: 600;
      opacity: 0.7;
      /* text-decoration: underline; */
      border-bottom: 1px solid transparent;
      display: inline-block;
    }
    .description {
      font-size: 0.8em;
      line-height: 1.7em;
      color: ${({ theme }) => theme.colors.text.dark};
    }
  }
`;

const IconStyled = styled(({ component, ...props }) =>
  cloneElement(component, props)
)`
  font-size: 2em !important;
  // background: red;
  // clip-path: circle(50% at 50% 50%);
  // color: white;
  // opacity: 0.7;
`;

const SubMenu: FunctionComponent<Props> = ({}) => {
  const elements = useSubMenuElements();
  return (
    <Wrapper>
      {elements.map((column) => {
        const { title, rows } = column;
        return (
          <div key={title} className={"column"}>
            <div className="title">{title}</div>
            <div className="rows">
              {rows.map((row) => {
                const { Icon, link, headline, description } = row;
                return (
                  <Link href={link} key={link} passHref>
                    {/* <div className={"row"} key={link}> */}
                    <LinkStyled>
                      <div className="icon">
                        {<IconStyled component={<Icon />} />}
                      </div>
                      <div className="texts">
                        <div className="headline">{headline}</div>
                        <div className="description">{description}</div>
                      </div>
                    </LinkStyled>
                    {/* </div> */}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default SubMenu;
