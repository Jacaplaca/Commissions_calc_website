import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import currencies from "../../data/currencies";
import locales from "../../data/locale";

const useMainStore = () => {
  const [background, setBackground] = useState("#ffffff");
  const [currency, setCurrency] = useState("usd");
  const [locale, setLocale] = useState("en-US");
  const {
    i18n: { language },
  } = useTranslation();

  const [contactIsOpen, setContactIsOpen] = useState(false);

  const handleOpenContact = () => {
    setContactIsOpen(true);
  };

  const handleCloseContact = () => {
    setContactIsOpen(false);
  };

  const updateBackground = (color: string) => {
    setBackground(color);
  };

  useEffect(() => {
    const currency = currencies?.[language];
    const locale = locales?.[language];
    setCurrency(currency);
    setLocale(locale);
  }, [language]);

  return {
    background,
    updateBackground,
    currency,
    locale,
    contactIsOpen,
    handleOpenContact,
    handleCloseContact,
  };
};

export default useMainStore;
