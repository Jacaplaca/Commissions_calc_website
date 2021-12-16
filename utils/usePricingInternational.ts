import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import axios from "axios";
const getPricesDataUrl = process.env.NEXT_PUBLIC_MS_GETPRICES_URL || "";
const pathPrices = "/all";
const pathMaxForFreeEmployees = "/free_users";

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

  const [maxEmployeesForFreePlan, setMaxEmployeesForFreePlan] = useState(0);

  const [prices, setPrices] = useState({
    free: {
      disabled: false,
      priceMonthPerEmployee: 0,
      priceMonthButYearPerEmployee: 0,
      priceForAllEmployeesMonthly: 0,
      priceForAllEmployeesYearly: 0,
    },
    basic: {
      disabled: false,
      priceMonthPerEmployee: 0,
      priceMonthButYearPerEmployee: 0,
      priceForAllEmployeesMonthly: 0,
      priceForAllEmployeesYearly: 0,
    },
    pro: {
      disabled: false,
      priceMonthPerEmployee: 0,
      priceMonthButYearPerEmployee: 0,
      priceForAllEmployeesMonthly: 0,
      priceForAllEmployeesYearly: 0,
    },
  });
  const [all, setAll] = useState(null);

  const getAll = async ({
    language,
    isYearly,
  }: {
    language: string;
    isYearly: boolean;
  }) => {
    const maxEmployeesForFreePlanData = await axios.get(
      `${getPricesDataUrl}${pathMaxForFreeEmployees}`
    );
    const maxEmployeesForFreePlan = maxEmployeesForFreePlanData.data;

    setMaxEmployeesForFreePlan(maxEmployeesForFreePlan);

    const result = await axios.get(`${getPricesDataUrl}${pathPrices}`);
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

  return {
    maxEmployeesForFreePlan,
    plans: {
      free: {
        ...prices.free,
        disabled: employees > maxEmployeesForFreePlan,
        priceMonthPerEmployee: 0,
        priceMonthButYearPerEmployee: 0,
        priceForAllEmployeesMonthly: 0,
        priceForAllEmployeesYearly: 0,
      },
      basic: { ...prices.basic, disabled: false },
      pro: { ...prices.pro, disabled: false },
    },
  };
};

export default usePricingInternational;
