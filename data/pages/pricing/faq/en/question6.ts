const LANGUAGE = "PL";

const appName = process.env.NEXT_PUBLIC_APPNAME;
const maxFreeEmp = process.env.NEXT_PUBLIC_MAXEMP4FREE;
// const SECONDPLAN = `${process.env.NEXT_PUBLIC_SECONDPLANNAME}_${LANGUAGE}`;
const FREEPLAN = process.env.[`NEXT_PUBLIC_FREEPLANNAME_${LANGUAGE}`];
const SECONDPLAN = process.env.[`NEXT_PUBLIC_SECONDPLANNAME_${LANGUAGE}`];
const THIRDPLAN = process.env.[`NEXT_PUBLIC_THIRDPLANNAME_${LANGUAGE}`]

const THIRDPLANEMP = "UNDEFINED";

export const answer = `

Tak. Przeprowadzamy również integrację z różnymi systemami księgowymi czy innymi systemami transakcyjnymi. Co firma to różne rozwiązanie, skontaktuj się więc z nami w tej sprawie abyśmy poznali Twoje rozwiązania i dokonali wyceny integracji. Koszt integracji w przypadku prostych rozwiązań oraz dużej ilość pracowników może być całkowicie bezpłatny.

`;

export const question = `Zbieram już transakcję ale chciałbym móc je rozliczać w ${appName}, czy to możliwe?`;
