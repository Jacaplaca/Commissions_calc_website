import styled from "styled-components";
import { FunctionComponent } from "react";
import useSubMenuElements from "./useSubMenuElements";
import SubMenuButton from "../SubMenuButton";

type Props = {
  mobile?:boolean
};
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: ${({ mobile }) => mobile ? 'column' : 'row'};
  overflow: scroll;
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
    }
  }
`;

const SubMenu: FunctionComponent<Props> = ({mobile}) => {
  const elements = useSubMenuElements();
  return (
    <Wrapper mobile={mobile}>
      {elements.map((column) => {
        const { title, rows } = column;
        return (
          <div key={title} className={"column"}>
            <div className="title">{title}</div>
            <div className="rows">
              {rows.map((row) => {
                const { Icon, link, headline, description } = row;
                return (
                  <SubMenuButton
                    key={link}
                    link={link}
                    Icon={Icon}
                    headline={headline}
                    description={description}
                    mobile={mobile}
                  />
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
