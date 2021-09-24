import styled from "styled-components";
import { FunctionComponent } from "react";
import MainMenuButton from "./MainMenuButton";
import MainNavigationBigButton from "../../Buttons/MainNavigationBigButton";

type Props = {};
const Row = styled.section`
  display: flex;
  justify-content: flex-end;
`;

const Menu = styled.ul`
  display: flex;
  margin-right: 15px;
`;

const elements = [
  { label: "Musicians", key: "one", link: "/" },
  { label: "Two And", key: "two", link: "/" },
  { label: "Three", key: "three", link: "/pricing" },
  { label: "Four More", key: "four", link: "/" },
];

const MainMenu: FunctionComponent<Props> = ({}) => {
  return (
    <Row>
      <Menu>
        {elements.map((element) => {
          const { label, key, link } = element;
          return <MainMenuButton label={label} key={key} link={link} />;
        })}
      </Menu>
      <div>
        <MainNavigationBigButton label={"Sign up free"} />
      </div>
    </Row>
  );
};

export default MainMenu;
