import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const maxFreeEmp = parseInt(process.env.NEXT_PUBLIC_MAXEMP4FREE || "0");
const yearFactor = 0.8333333333333333333;

const usePricingInternational = () => {
  const {
    i18n: { language },
  } = useTranslation("common");

  const started: { [key: string]: number[] } = {
    pl: [0, 249, 497],
    en: [0, 99, 297],
  };

  const employee: { [key: string]: number[] } = {
    pl: [
      0,
      started["pl"][1] / maxFreeEmp,
      started["pl"][2] / (maxFreeEmp * 2.5),
    ],
    en: [0, started["en"][1] / maxFreeEmp, started["en"][2] / (maxFreeEmp * 4)],
  };

  const startedPrices = started[language];

  const employeePrices = employee[language];

  const defaultPrices = [
    {
      maxEmployees: maxFreeEmp,
      price: startedPrices[0],
      disabled: false,
      yearlyPrice: startedPrices[0],
      forEmployeeMonthly: startedPrices[0],
      forEmployeeYearly: startedPrices[0],
      additionalEmployee: employeePrices[0],
    },
    {
      price: startedPrices[1],
      disabled: false,
      yearlyPrice: startedPrices[1] * 12 * yearFactor,
      forEmployeeMonthly: startedPrices[1] / maxFreeEmp,
      forEmployeeYearly: (startedPrices[1] / maxFreeEmp) * yearFactor,
      additionalEmployee: employeePrices[1],
    },
    {
      price: startedPrices[2],
      disabled: false,
      yearlyPrice: startedPrices[2] * 12 * yearFactor,
      forEmployeeMonthly: startedPrices[2] / maxFreeEmp,
      forEmployeeYearly: (startedPrices[2] / maxFreeEmp) * yearFactor,
      additionalEmployee: employeePrices[2],
    },
  ];

  return defaultPrices;
};

const usePricingStore = () => {
  const defaultPrices = usePricingInternational();
  const [recommendedPlan, setRecommendedPlan] = useState(0);
  const [employees, setEmployees] = useState(maxFreeEmp);
  const [employeesTemp, setEmployeesTemp] = useState(maxFreeEmp);
  const [period, setPeriod] = useState(0);
  const [plans, setPlans] = useState<typeof defaultPrices>(defaultPrices);
  const maxEmployeesOnSlider = 100;
  const freeEmployees = maxFreeEmp;
  const headerPlanBoxHeightFull = 350;
  const headerPlanBoxHeightSticky = 70;

  useEffect(() => {
    const free = employees <= freeEmployees;

    if (!free) {
      const isYearly = period;
      const basicPrice =
        employees *
        defaultPrices[1].additionalEmployee *
        (isYearly ? yearFactor : 1);
      const proPrice =
        employees *
          defaultPrices[2].additionalEmployee *
          (isYearly ? yearFactor : 1) +
        200;
      const basicYearlyPrice = basicPrice * 12;
      const proYearlyPrice = proPrice * 12;
      const basicForEmployeeMonthly = basicPrice / employees;
      const basicForEmployeeYearly = basicPrice / employees;
      const proForEmployeeMonthly = proPrice / employees;
      const proForEmployeeYearly = proPrice / employees;

      const pro = basicPrice > proPrice;
      setRecommendedPlan(pro ? 2 : 1);

      setPlans([
        { ...defaultPrices[0], disabled: true },
        {
          ...defaultPrices[1],
          price: Math.floor(basicPrice),
          yearlyPrice: Math.floor(basicYearlyPrice),
          forEmployeeMonthly: basicForEmployeeMonthly,
          forEmployeeYearly: basicForEmployeeYearly,
        },
        {
          ...defaultPrices[2],
          price: Math.floor(proPrice),
          yearlyPrice: Math.floor(proYearlyPrice),
          forEmployeeMonthly: proForEmployeeMonthly,
          forEmployeeYearly: proForEmployeeYearly,
        },
      ]);
    } else {
      setPlans(defaultPrices);
      setRecommendedPlan(1);
    }
  }, [employees, period]);

  type UpdateEmployees = (
    event: Event,
    value: number | Array<number>,
    activeThumb: number
  ) => void;
  const updateEmployees: UpdateEmployees = (e, no) => {
    if (typeof no === "number") {
      setEmployees(no);
    }
  };

  const updatePeriod = (period: number) => {
    setPeriod(period);
  };

  return {
    recommendedPlan,
    employees,
    updateEmployees,
    period,
    updatePeriod,
    plans,
    maxEmployeesOnSlider,
    freeEmployees,
    headerPlanBoxHeightFull,
    headerPlanBoxHeightSticky,
    employeesTemp,
  };
};

export default usePricingStore;
