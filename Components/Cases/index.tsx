import Link from "next/link";
import styled, { useTheme } from "styled-components";
import { FunctionComponent, useState } from "react";
import NavigationHorizontalWithIconAndColorLine from "../Navigations/WithIconAndColorLine";
import useCaseMenuElements from "./useCaseMenuElements";
import { LongArrowRightAlt } from "../Icons";
import BigPictureCase from "./BigPicture";
import antdBreakpoints from "../../themes/antdBreakpoints";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

type Element = {
  label: string;
  key: string;
  Icon: FunctionComponent;
  IconTopMenu: FunctionComponent;
  description: string;
  quote: string;
  path: string;
  more: string;
};

type Props = {};

const Wrapper = styled.section`
  display: flex;
  @media ${antdBreakpoints.lgMax} {
    flex-direction: column;
    align-items: center;
  }
  .content {
    max-width: 650px;
  }
`;

const ContentStyled = styled.div`
  padding: 20px 10px;
  padding-right: 30px;
  @media ${antdBreakpoints.smMax} {
    padding: 5px 10px;
    padding-right: 15px;
  }
  .quote {
    margin-top: 20px;
    margin-bottom: 40px;
    font-style: italic;
    font-size: 1.4em;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text.dark};
    padding: 10px 15px;
    @media ${antdBreakpoints.smMax} {
      font-size: 1.2em;
      margin-top: 5px;
      margin-bottom: 15px;
      padding: 0px 5px;
    }
  }
  .description {
    border-left: 1px solid ${({ color }) => color};
    padding-left: 25px;
    font-size: 1.05em;
    line-height: 1.63em;
    margin-bottom: 20px;
    @media ${antdBreakpoints.smMax} {
      font-size: 1em;
      margin-bottom: 20px;
    }
  }
  .link {
    a {
      display: flex;
      color: darkBlue;
      gap: 0 10px;
      font-size: 1.1em;
      font-weight: bold;
      &:hover {
        color: ${({ theme }) => theme.colors.text.dark}!important;
      }
      &:hover .arrow {
        transform: translateX(7px);
      }
      .arrow {
        transition: all 0.2s;
      }
    }
  }
`;

const Arrow = styled(LongArrowRightAlt)`
  /* font-size: 1.2em !important ; */
`;

const Content = ({
  activeCase,
  color,
}: {
  activeCase: Element;
  color: string;
}) => {
  const { description, quote, path, more } = activeCase;
  return (
    <ContentStyled color={color}>
      <div className="quote">&ldquo;{quote}&rdquo;</div>
      <div className="description">{description}</div>
      <div className="link">
        <Link href={`${path}`}>
          <a>
            {more}
            <div className="arrow">
              <Arrow />
            </div>
          </a>
        </Link>
      </div>
    </ContentStyled>
  );
};

const CasesTeaser: FunctionComponent<Props> = ({}) => {
  const elements = useCaseMenuElements();
  const [activeKey, setActiveKey] = useState<string>(elements[0].key);
  const [activeCase, setActiveCase] = useState<Element>(elements[0]);
  const theme = useTheme();
  const COLOR = theme.colors.palette.orange.main;
  const screen = useBreakpoint();

  const handelChangeActiveKey = (key: string) => {
    setActiveKey(key);
    const activeCase = elements.find((x) => x.key === key);
    activeCase && setActiveCase(activeCase);
  };

  const image = `/pages/cases/${activeKey}/slider.png`;

  return (
    <Wrapper>
      <div className="content">
        <NavigationHorizontalWithIconAndColorLine
          elements={elements}
          activeKey={activeKey}
          changeActiveKey={handelChangeActiveKey}
          color={COLOR}
        />
        {screen.lg ? (
          <Content activeCase={activeCase} color={COLOR} />
        ) : (
          <div className="picture">
            <BigPictureCase path={image} />
          </div>
        )}
      </div>
      {screen.lg ? (
        <div className="picture">
          <BigPictureCase path={image} />
        </div>
      ) : (
        <Content activeCase={activeCase} color={COLOR} />
      )}
    </Wrapper>
  );
};

export default CasesTeaser;
