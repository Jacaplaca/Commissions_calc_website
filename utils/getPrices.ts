const maxFreeEmp = parseInt(process.env.NEXT_PUBLIC_MAXEMP4FREE || "0");
const yearFactor = 0.8333333333333333333;

const getPrices = ({
  language,
  employees,
  isYearly,
}: {
  language: string;
  isYearly: boolean;
  employees: number;
}) => {
  const freeEmployees = maxFreeEmp;

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

  const free = employees <= freeEmployees;

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

  return {
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
  };
};

export default getPrices;
