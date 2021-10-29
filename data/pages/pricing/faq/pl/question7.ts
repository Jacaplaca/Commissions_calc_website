const LANGUAGE = "PL";

const appName = process.env.NEXT_PUBLIC_APPNAME;
const maxFreeEmp = process.env.NEXT_PUBLIC_MAXEMP4FREE;
// const SECONDPLAN = `${process.env.NEXT_PUBLIC_SECONDPLANNAME}_${LANGUAGE}`;
const FREEPLAN = process.env?.[`NEXT_PUBLIC_FREEPLANNAME_${LANGUAGE}`];
const SECONDPLAN = process.env?.[`NEXT_PUBLIC_SECONDPLANNAME_${LANGUAGE}`];
const THIRDPLAN = process.env?.[`NEXT_PUBLIC_THIRDPLANNAME_${LANGUAGE}`];

const THIRDPLANEMP = "UNDEFINED";

export const answer = `

Jest to możliwe w każdym momencie. Wystarczy że wypełnisz ten formularz, my zmienimy Ci plan i wyślemy dodatkowe informacje na Twojego maila.


`;

export const question = `Chciałbym zmienić plan na wyższy lub niższy w trakcje korzystania z aplikacji.`;
