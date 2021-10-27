const LANGUAGE = "PL";

const appName = process.env.NEXT_PUBLIC_APPNAME;
const maxFreeEmp = process.env.NEXT_PUBLIC_MAXEMP4FREE;
// const SECONDPLAN = `${process.env.NEXT_PUBLIC_SECONDPLANNAME}_${LANGUAGE}`;
const FREEPLAN = process.env.[`NEXT_PUBLIC_FREEPLANNAME_${LANGUAGE}`];
const SECONDPLAN = process.env.[`NEXT_PUBLIC_SECONDPLANNAME_${LANGUAGE}`];
const THIRDPLAN = process.env.[`NEXT_PUBLIC_THIRDPLANNAME_${LANGUAGE}`]

const THIRDPLANEMP = "UNDEFINED";

export const answer = `

Is this possible at any time? Just fill in this form. We will change your plan and send you additional information in your email.

`;

export const question = `I want to change to a higher or lower plan while using the app.`;
