const LANGUAGE = "PL";

const appName = process.env.NEXT_PUBLIC_APPNAME;
const maxFreeEmp = process.env.NEXT_PUBLIC_MAXEMP4FREE;
// const SECONDPLAN = `${process.env.NEXT_PUBLIC_SECONDPLANNAME}_${LANGUAGE}`;
const FREEPLAN = process.env?.[`NEXT_PUBLIC_FREEPLANNAME_${LANGUAGE}`];
const SECONDPLAN = process.env?.[`NEXT_PUBLIC_SECONDPLANNAME_${LANGUAGE}`];
const THIRDPLAN = process.env?.[`NEXT_PUBLIC_THIRDPLANNAME_${LANGUAGE}`];

const THIRDPLANEMP = "UNDEFINED";

export const answer = `

If you have a small business with up to ${maxFreeEmp} employees and don't want to make commissions on margins, create rules for groups, design thresholds for teams, share rankings with your employees, and use chat, you can use the free plan. 

The ${THIRDPLAN} plan has the same functionality as ${SECONDPLAN} plus the ability to group products or services and the option to create thresholds for teams. It also allows you to create a company chat and send messages to different employees, such as members of a particular team/system or managers themselves.

It becomes more profitable with higher amount of employees. However, nothing is stopping you from using ${THIRDPLAN} with less than ${maxFreeEmp} employees.


`;

export const question = `Which plan should I use?`;
