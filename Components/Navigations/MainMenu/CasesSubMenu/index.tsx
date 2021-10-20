import styled from "styled-components";
import { FunctionComponent } from "react";
import useCaseMenuElements from "../../../Cases/useCaseMenuElements";
import SubMenuButton from "../SubMenuButton";

type Props = {};
const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  a {
    list-style: none;
    flex: 0 0 30.333333%;
  }
`;

const CasesSubMenu: FunctionComponent<Props> = ({}) => {
  const elements = useCaseMenuElements();

  return (
    <Wrapper>
      {elements.map((element) => {
        const { label, IconTopMenu, path, description, quote, more } = element;
        return (
          <SubMenuButton
            key={path}
            link={path}
            Icon={IconTopMenu}
            headline={label}
            quote={quote}
          />
        );
      })}
    </Wrapper>
  );
};

export default CasesSubMenu;
