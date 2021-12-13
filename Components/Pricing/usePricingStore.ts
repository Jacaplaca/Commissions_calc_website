import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useState, useEffect } from "react";
import usePricingInternational from "../../utils/usePricingInternational";

const maxFreeEmp = parseInt(process.env.NEXT_PUBLIC_MAXEMP4FREE || "0");

type DefaultPricesType = {
  maxEmployees: number;
  price: number;
  disabled: boolean;
  yearlyPrice: number;
  forEmployeeMonthly: number;
  forEmployeeYearly: number;
  additionalEmployee: number;
};

const usePricingStore = () => {
  const [recommendedPlan, setRecommendedPlan] = useState(0);
  const [employees, setEmployees] = useState(maxFreeEmp);
  const [employeesTemp, setEmployeesTemp] = useState(maxFreeEmp);
  const [period, setPeriod] = useState(0);

  const {
    pro,
    basicPrice,
    proPrice,
    basicYearlyPrice,
    proYearlyPrice,
    basicForEmployeeMonthly,
    basicForEmployeeYearly,
    proForEmployeeMonthly,
    proForEmployeeYearly,
    defaultPrices,
  } = usePricingInternational({
    isYearly: Boolean(period),
    employees: employees,
  }) || {
    pro: false,
    basicPrice: 0,
    proPrice: 0,
    basicYearlyPrice: 0,
    proYearlyPrice: 0,
    basicForEmployeeMonthly: 0,
    basicForEmployeeYearly: 0,
    proForEmployeeMonthly: 0,
    proForEmployeeYearly: 0,
    defaultPrices: [
      {
        maxEmployees: maxFreeEmp,
        price: 0,
        disabled: false,
        yearlyPrice: 0,
        forEmployeeMonthly: 0,
        forEmployeeYearly: 0,
        additionalEmployee: 0,
      },
      {
        maxEmployees: maxFreeEmp,
        price: 0,
        disabled: false,
        yearlyPrice: 0,
        forEmployeeMonthly: 0,
        forEmployeeYearly: 0,
        additionalEmployee: 0,
      },
      {
        maxEmployees: maxFreeEmp,
        price: 0,
        disabled: false,
        yearlyPrice: 0,
        forEmployeeMonthly: 0,
        forEmployeeYearly: 0,
        additionalEmployee: 0,
      },
    ],
  };

  const [plans, setPlans] = useState<DefaultPricesType[]>(defaultPrices);
  const maxEmployeesOnSlider = 100;
  const freeEmployees = maxFreeEmp;
  const screen = useBreakpoint();
  const headerPlanBoxHeightFull = screen.sm ? 350 : 300;
  const headerPlanBoxHeightSticky = 70;

  useEffect(() => {
    const free = employees <= freeEmployees;

    if (!free && defaultPrices && defaultPrices.length > 2) {
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
  }, [employees, period, basicPrice]);

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
