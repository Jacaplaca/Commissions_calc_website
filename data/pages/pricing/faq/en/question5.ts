const LANGUAGE = "PL";

const appName = process.env.NEXT_PUBLIC_APPNAME;
const maxFreeEmp = process.env.NEXT_PUBLIC_MAXEMP4FREE;
// const SECONDPLAN = `${process.env.NEXT_PUBLIC_SECONDPLANNAME}_${LANGUAGE}`;
const FREEPLAN = process.env?.[`NEXT_PUBLIC_FREEPLANNAME_${LANGUAGE}`];
const SECONDPLAN = process.env?.[`NEXT_PUBLIC_SECONDPLANNAME_${LANGUAGE}`];
const THIRDPLAN = process.env?.[`NEXT_PUBLIC_THIRDPLANNAME_${LANGUAGE}`];

const THIRDPLANEMP = "UNDEFINED";

export const answer = `

We understand that sometimes a customer may change his mind or find that the application doesn't meet his requirements, that's why (in both monthly and annual plans) for 30 days after the end of the test plan we offer a full refund of what you paid. You should get your money back within 3-5 days. All you have to do is contact us.

`;

export const question = `I don't like ${appName}, can I count on a refund?`;
