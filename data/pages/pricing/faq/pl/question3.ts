const LANGUAGE = "PL";

const appName = process.env.NEXT_PUBLIC_APPNAME;
const maxFreeEmp = process.env.NEXT_PUBLIC_MAXEMP4FREE;
// const SECONDPLAN = `${process.env.NEXT_PUBLIC_SECONDPLANNAME}_${LANGUAGE}`;
const FREEPLAN = process.env?.[`NEXT_PUBLIC_FREEPLANNAME_${LANGUAGE}`];
const SECONDPLAN = process.env?.[`NEXT_PUBLIC_SECONDPLANNAME_${LANGUAGE}`];
const THIRDPLAN = process.env?.[`NEXT_PUBLIC_THIRDPLANNAME_${LANGUAGE}`];

const THIRDPLANEMP = "UNDEFINED";

export const answer = `

Do póki utrzymasz ilość pracowników nie większą niż ${maxFreeEmp} oraz będziesz akceptował mniejszą funkcjonalność niż przy wyższych planach,  ${FREEPLAN} pozostanie w pełni bezpłatny. Podczas rejestracji do tego planu nie ma potrzeby podawania karty kredytowej.

`;

export const question = `Czy Plan ${FREEPLAN} będzie zawsze darmowy?`;
