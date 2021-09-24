import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useState, useEffect } from "react";
import useDebouncedEffect from "../NoCopy/useDebouncedEffect";

const yearFactor = 0.8333333333333333333;

const defaultPrices = [
  {
    maxEmployees: 5,
    price: 0,
    disabled: false,
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
  const [employees, setEmployees] = useState(5);
  const [employeesTemp, setEmployeesTemp] = useState(5);
  const [period, setPeriod] = useState(0);
  const [plans, setPlans] = useState(defaultPrices);
  const maxEmployeesOnSlider = 100;
  const freeEmployees = 5;
  const headerPlanBoxHeightFull = 340;
  const headerPlanBoxHeightSticky = 70;

  // useDebouncedEffect(() => setEmployees(employeesTemp), [employeesTemp], 300);

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
          price: parseInt(basicPrice),
          yearlyPrice: parseInt(basicYearlyPrice),
        },
        {
          ...defaultPrices[2],
          price: parseInt(proPrice),
          yearlyPrice: parseInt(proYearlyPrice),
        },
      ]);
    } else {
      setPlans(defaultPrices);
    }
  }, [employees, period]);

  const updateEmployees = (e, no) => {
    setEmployees(no);
  };

  const updatePeriod = (period) => {
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
