import styled from "styled-components";
import { FunctionComponent, useState } from "react";
import MainMenuButton from "./MainMenuButton";
import MainNavigationBigButton from "../../Buttons/MainNavigationBigButton";
import { useTranslation } from "react-i18next";
import SubMenu from "./SubMenu";
import LanguageSwitcher from "./LanguageSwitcher";

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
  const {
    t,
    i18n: { language },
  } = useTranslation("common");
  const [featuresOpened, setFeaturesOpened] = useState<string>("");

  const toggler = (key: string) => {
    if (featuresOpened === key) {
      setFeaturesOpened("");
    } else {
      setFeaturesOpened(key);
    }
  };

  const elements = [
    {
      label: "Some",
      key: "zero",
      action: () => toggler("zero"),
      SubMenu: <SubMenu />,
      centerSubMenu: true,
    },
    {
      label: "Features",
      key: "one",
      action: () => toggler("one"),
      SubMenu: <SubMenu />,
      centerSubMenu: true,
    },
    { label: "Two And", key: "two", link: "/" },
    { label: "Three", key: "three", link: "/pricing" },
    { label: "Four More", key: "four", link: "/" },
    {
      label: language,
      key: "five",
      action: () => toggler("five"),
      SubMenu: <LanguageSwitcher />,
    },
  ];

  return (
    <Row>
      <Menu>
        {elements.map((element) => {
          const { label, key, link, action, SubMenu, centerSubMenu } = element;
          return (
            <MainMenuButton
              label={label}
              key={key}
              link={link}
              action={action}
              clicked={featuresOpened === key}
              SubMenu={SubMenu}
              centerSubMenu={centerSubMenu}
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
