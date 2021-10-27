const LANGUAGE = "PL";

const appName = process.env.NEXT_PUBLIC_APPNAME;
const maxFreeEmp = process.env.NEXT_PUBLIC_MAXEMP4FREE;
// const SECONDPLAN = `${process.env.NEXT_PUBLIC_SECONDPLANNAME}_${LANGUAGE}`;
const FREEPLAN = process.env.[`NEXT_PUBLIC_FREEPLANNAME_${LANGUAGE}`];
const SECONDPLAN = process.env.[`NEXT_PUBLIC_SECONDPLANNAME_${LANGUAGE}`];
const THIRDPLAN = process.env.[`NEXT_PUBLIC_THIRDPLANNAME_${LANGUAGE}`]


export const answer = `

Jeśli masz małą firmę do ${maxFreeEmp} pracowników oraz nie chcesz rozliczać prowizji od marży, tworzyć reguł dla grup, projektować progów dla zespołów, udostępniać rankingi swoim pracownikom oraz korzystać z chatu, możesz używać planu darmowego. 

Plan ${THIRDPLAN} posiada te same funkcjonalności co ${SECONDPLAN} i dodatkowo możliwość grupowania produktów czy usług i opcję tworzenia progów dla zespołów. Pozwala też utworzyć firmowy chat oraz wysyłać wiadomości do różnych grup pracowników np. członków danego zespołu/systemu czy samych menadżerów.

Staje się bardziej opłacalny przy większej liczbie pracowników. Nie stoi jednak nic na przeszkodzie skorzystać z ${THIRDPLAN} przy ilości pracowników mniejszej niż ${maxFreeEmp}


`;

export const question = `Z którego planu powinienem skorzystać?`;
