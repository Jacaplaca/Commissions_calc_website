const LANGUAGE = "EN";

const appName = process.env.NEXT_PUBLIC_APPNAME;
const maxFreeEmp = process.env.NEXT_PUBLIC_MAXEMP4FREE;
// const SECONDPLAN = `${process.env.NEXT_PUBLIC_SECONDPLANNAME}_${LANGUAGE}`;
const FREEPLAN = process.env?.[`NEXT_PUBLIC_FREEPLANNAME_${LANGUAGE}`];
const SECONDPLAN = process.env?.[`NEXT_PUBLIC_SECONDPLANNAME_${LANGUAGE}`];
const THIRDPLAN = process.env?.[`NEXT_PUBLIC_THIRDPLANNAME_${LANGUAGE}`];

const THIRDPLANEMP = "UNDEFINED";

export const answer = `

If you have a small business with up to ${maxFreeEmp} employees and don't want to make commissions on margins, create rules for groups, design thresholds for teams, share rankings with your employees, and use chat, you can use the free plan. 

The ${THIRDPLAN} plan has the same features as ${SECONDPLAN}, but in addition, your data will be hosted on a private server independent of our infrastructure. You can run it on your domain.

It becomes more profitable with higher amount of employees. However, nothing is stopping you from using ${THIRDPLAN} with less than ${maxFreeEmp} employees.


`;

export const question = `Which plan should I use?`;
