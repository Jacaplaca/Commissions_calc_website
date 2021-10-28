import { useTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';
import SubMenu from "./MainMenu/SubMenu";
import CasesSubMenu from "./MainMenu/CasesSubMenu";
import LanguageSwitcher from './MainMenu/LanguageSwitcher';


const useMainMenuElements = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("common");
  const [featuresOpened, setFeaturesOpened] = useState<number>(0);

const closeSubMenu = () => {
  setFeaturesOpened(0)
}

  const toggler = (key: number) => {
    if (featuresOpened === key) {
      setFeaturesOpened(0);
    } else {
      setFeaturesOpened(key);
    }
  };

  const elements = [
    {
      label: t("common:featuresMenuLabel"),
      key: 1,
      action: () => toggler(1),
      SubMenu: <SubMenu />,
      centerSubMenu: true,
    },
    {
      label: t("common:casesMenuLabel"),
      key: 2,
      action: () => toggler(2),
      SubMenu: <CasesSubMenu />,
      centerSubMenu: true,
    },
    { label: t("common:pricingMenuLabel"), key: 3, link: "/pricing" },
    {
      label: language,
      key: 4,
      action: () => toggler(4),
      SubMenu: <LanguageSwitcher />,
    },
  ];

  return {elements, featuresOpened, closeSubMenu}
}

export default useMainMenuElements