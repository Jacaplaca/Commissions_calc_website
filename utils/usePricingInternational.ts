import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import axios from "axios";
const getPricesDataUrl = process.env.NEXT_PUBLIC_MS_GETPRICES_ALL_URL || "";
// import getPrices from "./getPrices";

const usePricingInternational = ({
  isYearly,
  employees,
}: {
  isYearly: boolean;
  employees: number;
}) => {
  const {
    i18n: { language },
  } = useTranslation("common");

  const [prices, setPrices] = useState(null);
  const [all, setAll] = useState(null);

  const getAll = async ({
    language,
    isYearly,
  }: {
    language: string;
    isYearly: boolean;
  }) => {
    const result = await axios.post(getPricesDataUrl, {
      language,
      isYearly: isYearly ? 1 : 0,
      // employees,
    });
    setAll(result.data);
    getPrices(result.data, employees);
  };

  const getPrices = async (all: any[], employees: number) => {
    const prices = all[employees];
    setPrices(prices);
  };

  useEffect(() => {
    if (all) {
      getPrices(all, employees);
    }
  }, [employees]);

  useEffect(() => {
    getAll({ language, isYearly });
  }, [isYearly, language]);

  // const prices = getPrices({
  //   language,
  //   isYearly,
  //   employees,
  // });

  return prices;
};

export default usePricingInternational;
