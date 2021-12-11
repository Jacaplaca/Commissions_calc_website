import { useTranslation } from "next-i18next";
import getPrices from "./getPrices";

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

  return getPrices({
    language,
    isYearly,
    employees,
  });
};

export default usePricingInternational;
