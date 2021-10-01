import styled from "styled-components";
import { FunctionComponent, useState } from "react";
import MainMenuButton from "./MainMenuButton";
import MainNavigationBigButton from "../../Buttons/MainNavigationBigButton";

type Props = {};
const Row = styled.section`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const Menu = styled.ul`
  display: flex;
  margin-right: 15px;
`;

const MainMenu: FunctionComponent<Props> = ({}) => {
  const [featuresOpened, setFeaturesOpened] = useState<string>("");

  const toggler = (key: string) => {
    console.log("🚀 ~ file: index.tsx ~ line 21 ~ toggler ~ key", key);
    if (featuresOpened === key) {
      setFeaturesOpened("");
    } else {
      setFeaturesOpened(key);
    }
  };

  const elements = [
    { label: "Features", key: "one", action: () => toggler("one") },
    { label: "Two And", key: "two", link: "/" },
    { label: "Three", key: "three", link: "/pricing" },
    { label: "Four More", key: "four", link: "/" },
  ];

  return (
    <Row>
      <Menu>
        {elements.map((element) => {
          const { label, key, link, action } = element;
          return (
            <MainMenuButton
              label={label}
              key={key}
              link={link}
              action={action}
              clicked={featuresOpened === key}
            />
          );
        })}
      </Menu>
      <div>
        <MainNavigationBigButton label={"Sign up free"} />
      </div>
    </Row>
  );
};

export default MainMenu;
