const LANGUAGE = "PL";

const appName = process.env.NEXT_PUBLIC_APPNAME;
const maxFreeEmp = process.env.NEXT_PUBLIC_MAXEMP4FREE;
// const SECONDPLAN = `${process.env.NEXT_PUBLIC_SECONDPLANNAME}_${LANGUAGE}`;
const FREEPLAN = process.env?.[`NEXT_PUBLIC_FREEPLANNAME_${LANGUAGE}`];
const SECONDPLAN = process.env?.[`NEXT_PUBLIC_SECONDPLANNAME_${LANGUAGE}`];
const THIRDPLAN = process.env?.[`NEXT_PUBLIC_THIRDPLANNAME_${LANGUAGE}`];

const THIRDPLANEMP = "UNDEFINED";

export const answer = `

Yes, we also do integrations with various accounting systems or other transaction systems. Every company has its solution, so don't hesitate to get in touch with us, and we will get to know your solution and estimate the integration. In some cases, the cost of integration in the case of simple solutions and a large number of employees can be completely free. Contact us to be sure.

`;

export const question = `I'm already collecting transactions, but I would like to settle them in ${appName}. Is it possible?`;
