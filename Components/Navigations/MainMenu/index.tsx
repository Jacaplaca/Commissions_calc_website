import styled from "styled-components";
import { FunctionComponent, useState } from "react";
import MainMenuButton from "./MainMenuButton";
import MainNavigationBigButton from "../../Buttons/MainNavigationBigButton";
import { useTranslation } from "react-i18next";
import SubMenu from "./SubMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import CasesSubMenu from "./CasesSubMenu";

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
      label: t("common:featuresMenuLabel"),
      key: "one",
      action: () => toggler("one"),
      SubMenu: <SubMenu />,
      centerSubMenu: true,
    },
    {
      label: t("common:casesMenuLabel"),
      key: "cases",
      action: () => toggler("cases"),
      SubMenu: <CasesSubMenu />,
      centerSubMenu: true,
    },
    { label: t("common:pricingMenuLabel"), key: "two", link: "/pricing" },
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
        <MainNavigationBigButton label={t("common:startFree")} />
      </div>
    </Row>
  );
};

export default MainMenu;
