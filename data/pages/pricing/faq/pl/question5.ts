const LANGUAGE = "PL";

const appName = process.env.NEXT_PUBLIC_APPNAME;
const maxFreeEmp = process.env.NEXT_PUBLIC_MAXEMP4FREE;
// const SECONDPLAN = `${process.env.NEXT_PUBLIC_SECONDPLANNAME}_${LANGUAGE}`;
const FREEPLAN = process.env?.[`NEXT_PUBLIC_FREEPLANNAME_${LANGUAGE}`];
const SECONDPLAN = process.env?.[`NEXT_PUBLIC_SECONDPLANNAME_${LANGUAGE}`];
const THIRDPLAN = process.env?.[`NEXT_PUBLIC_THIRDPLANNAME_${LANGUAGE}`];

const THIRDPLANEMP = "UNDEFINED";

export const answer = `

Rozumiemy że czasami klient może zmienić zdanie lub przekonać że aplikacja nie spełnia jego wymagań, dlatego (w planie miesięcznym jak i rocznym) przez  30 dni od zakończeniu planu testowego oferujemy pełny zwrot tego co zapłaciłeś. Pieniądze powinieneś otrzymać z powrotem w ciągu 3-5dni. Wystarczy że się z nami skontaktujesz.

`;

export const question = `Nie podoba mi się ${appName}, czy mogę liczyć na oddanie pieniędzy?`;
