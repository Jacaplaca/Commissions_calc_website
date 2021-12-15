import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useState, useEffect } from "react";
import usePricingInternational from "../../utils/usePricingInternational";

const maxFreeEmp = parseInt(process.env.NEXT_PUBLIC_MAXEMP4FREE || "0");

// type DefaultPricesType = {
//   maxEmployees: number;
//   price: number;
//   disabled: boolean;
//   yearlyPrice: number;
//   forEmployeeMonthly: number;
//   forEmployeeYearly: number;
//   additionalEmployee: number;
// };

const usePricingStore = () => {
  const [recommendedPlan, setRecommendedPlan] = useState(0);
  const [employees, setEmployees] = useState(maxFreeEmp);
  // const [employeesTemp, setEmployeesTemp] = useState(maxFreeEmp);
  const [period, setPeriod] = useState(0);

  const { maxEmployeesForFreePlan, plans } = usePricingInternational({
    isYearly: Boolean(period),
    employees: employees,
  });

  // useEffect(() => {
  //   console.log({ plans });
  // }, [plans]);

  // const [plans, setPlans] = useState<DefaultPricesType[]>();
  const maxEmployeesOnSlider = 100;
  const freeEmployees = maxFreeEmp;

  const screen = useBreakpoint();
  const headerPlanBoxHeightFull = screen.sm ? 350 : 300;
  const headerPlanBoxHeightSticky = 70;

  useEffect(() => {
    if (employees > 50) {
      setRecommendedPlan(2);
    } else {
      setRecommendedPlan(1);
    }
  }, [employees]);

  // useEffect(() => {
  //   const free = employees <= freeEmployees;

  //   if (!free && defaultPrices && defaultPrices.length > 2) {
  //     setRecommendedPlan(employees > 50 ? 2 : 1);
  //     // const defaultPrices = [
  // //   {
  // //     maxEmployees: maxFreeEmp,
  // //     price: startedPrices[0],
  // //     disabled: false,
  // //     yearlyPrice: startedPrices[0],
  // //     forEmployeeMonthly: startedPrices[0],
  // //     forEmployeeYearly: startedPrices[0],
  // //     additionalEmployee: employeePrices[0],
  // //   },
  // //   {
  // //     price: startedPrices[1],
  // //     disabled: false,
  // //     yearlyPrice: startedPrices[1] * 12 * yearFactor,
  // //     forEmployeeMonthly: startedPrices[1] / maxFreeEmp,
  // //     forEmployeeYearly: (startedPrices[1] / maxFreeEmp) * yearFactor,
  // //     additionalEmployee: employeePrices[1],
  // //   },
  // //   {
  // //     price: startedPrices[2],
  // //     disabled: false,
  // //     yearlyPrice: startedPrices[2] * 12 * yearFactor,
  // //     forEmployeeMonthly: startedPrices[2] / maxFreeEmp,
  // //     forEmployeeYearly: (startedPrices[2] / maxFreeEmp) * yearFactor,
  // //     additionalEmployee: employeePrices[2],
  // //   },
  // // ];

  //     setPlans([

  //       { maxEmployees: basic.maxEmployeesForFreePlan,
  //         price:0,
  //         yearlyPrice:0,
  //         forEmployeeMonthly:0,
  //         forEmployeeYearly: 0,
  //         disabled: true
  //        },
  //       {
  //         disabled:false,
  //         price: Math.floor(basicPrice),
  //         yearlyPrice: Math.floor(basicYearlyPrice),
  //         forEmployeeMonthly: basicForEmployeeMonthly,
  //         forEmployeeYearly: basicForEmployeeYearly,
  //       },
  //       {
  //         disabled:false,
  //         price: Math.floor(proPrice),
  //         yearlyPrice: Math.floor(proYearlyPrice),
  //         forEmployeeMonthly: proForEmployeeMonthly,
  //         forEmployeeYearly: proForEmployeeYearly,
  //       },
  //     ]);
  //   } else {
  //     setPlans(defaultPrices);
  //     setRecommendedPlan(1);
  //   }
  // }, [employees, period, basicPrice]);

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
    maxEmployeesForFreePlan,
    // employeesTemp,
  };
};

export default usePricingStore;
