import Link from "next/link";
import styled from "styled-components";
import { cloneElement, FunctionComponent } from "react";
import { transparentize } from "polished";

const LinkStyled = styled.a<{ mobile?: boolean }>`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: ${({ mobile }) => (mobile ? 25 : 15)}px;
  padding-right: ${({ mobile }) => (mobile ? 25 : 5)}px;
  border-left: ${({ mobile }) => (mobile ? 0 : 1)}px solid
    ${({ theme }) => transparentize(0.8, theme.colors.palette.darkBlue.main)};
  /* border-bottom: ${({ mobile }) => (mobile ? 1 : 0)}px solid
    ${({ theme }) =>
    transparentize(0.8, theme.colors.palette.darkBlue.main)}; */
  width: ${({ mobile }) => (mobile ? "100%" : "300px")};
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
    .quote {
      font-style: italic;
      padding: 5px 0px;
      padding-right: 15px;
      font-size: 0.9em;
    }
  }
`;

const IconStyled = styled(({ component, ...props }) =>
  cloneElement(component, props)
)`
  font-size: 2em !important;
`;

type Props = {
  link: string;
  Icon: FunctionComponent;
  headline: string;
  description?: string;
  quote?: string;
  mobile?: boolean;
};

const SubMenuButton: FunctionComponent<Props> = ({
  link,
  Icon,
  headline,
  description,
  quote,
  mobile,
}) => {
  return (
    <Link href={link} key={link} passHref>
      <LinkStyled mobile={mobile}>
        <div className="icon">{<IconStyled component={<Icon />} />}</div>
        <div className="texts">
          <div className="headline">{headline}</div>
          <div className="description">{description}</div>
          {quote && <div className="quote">&ldquo;{quote}&rdquo;</div>}
        </div>
      </LinkStyled>
    </Link>
  );
};

export default SubMenuButton;
