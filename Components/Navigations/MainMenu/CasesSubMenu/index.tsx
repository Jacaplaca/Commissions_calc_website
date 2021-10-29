import styled from "styled-components";
import { FunctionComponent } from "react";
import useCaseMenuElements from "../../../Cases/useCaseMenuElements";
import SubMenuButton from "../SubMenuButton";

type Props = { mobile?: boolean };
const Wrapper = styled.section<{ mobile?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  a {
    list-style: none;
    flex: ${({ mobile }) => !mobile && "0 0 30.333333%"};
  }
`;

const CasesSubMenu: FunctionComponent<Props> = ({ mobile }) => {
  const elements = useCaseMenuElements();

  return (
    <Wrapper mobile={mobile}>
      {elements.map((element) => {
        const { label, IconTopMenu, path, description, quote, more } = element;
        return (
          <SubMenuButton
            key={path}
            link={path}
            Icon={IconTopMenu}
            headline={label}
            quote={quote}
            mobile={mobile}
          />
        );
      })}
    </Wrapper>
  );
};

export default CasesSubMenu;
