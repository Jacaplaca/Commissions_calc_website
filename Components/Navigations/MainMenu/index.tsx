import styled from "styled-components";
import { FunctionComponent, useState } from "react";
import MainMenuButton from "./MainMenuButton";
import MainNavigationBigButton from "../../Buttons/MainNavigationBigButton";
import { useTranslation } from "react-i18next";
import SubMenu from "./SubMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import CasesSubMenu from "./CasesSubMenu";
import { useRouter } from "next/router";
import useMainMenuElements from "../useMainMenuElements";
import paths from "../../../data/paths";

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
  const { elements, featuresOpened } = useMainMenuElements();
  const {
    t,
    i18n: { language },
  } = useTranslation("common");
  const router = useRouter();
  const path = router.pathname;

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
      {path !== "/plans" && (
        <div>
          <MainNavigationBigButton
            label={t("common:startFree")}
            path={paths.freePlan}
          />
        </div>
      )}
    </Row>
  );
};

export default MainMenu;
