import { useState, useEffect } from "react";
const maxFreeEmp = parseInt(process.env.NEXT_PUBLIC_MAXEMP4FREE || "0");

const yearFactor = 0.8333333333333333333;

const defaultPrices = [
  {
    maxEmployees: maxFreeEmp,
    price: 0,
    disabled: false,
    yearlyPrice: 0,
  },
  {
    price: 99,
    disabled: false,
    yearlyPrice: 99 * 12 * yearFactor,
  },
  {
    price: 297,
    disabled: false,
    yearlyPrice: 297 * 12 * yearFactor,
  },
];

const usePricingStore = () => {
  const [recommendedPlan, setRecommendedPlan] = useState(0);
  const [employees, setEmployees] = useState(maxFreeEmp);
  const [employeesTemp, setEmployeesTemp] = useState(maxFreeEmp);
  const [period, setPeriod] = useState(0);
  const [plans, setPlans] = useState<typeof defaultPrices>(defaultPrices);
  const maxEmployeesOnSlider = 100;
  const freeEmployees = maxFreeEmp;
  const headerPlanBoxHeightFull = 340;
  const headerPlanBoxHeightSticky = 70;

  useEffect(() => {
    const free = employees <= freeEmployees;
    const pro = employees >= 50;
    const basic = !free && !pro;
    setRecommendedPlan(free ? 1 : pro ? 2 : 1);

    if (!free) {
      const isYearly = period;
      const basicPrice = employees * 29 * (isYearly ? yearFactor : 1);
      const proPrice = employees * 24 * (isYearly ? yearFactor : 1) + 200;
      const basicYearlyPrice = basicPrice * 12;
      const proYearlyPrice = proPrice * 12;

      setPlans([
        { ...defaultPrices[0], disabled: true },
        {
          ...defaultPrices[1],
          price: Math.floor(basicPrice),
          yearlyPrice: Math.floor(basicYearlyPrice),
        },
        {
          ...defaultPrices[2],
          price: Math.floor(proPrice),
          yearlyPrice: Math.floor(proYearlyPrice),
        },
      ]);
    } else {
      setPlans(defaultPrices);
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
