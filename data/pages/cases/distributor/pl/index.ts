const FOLDER = "cases/distributor";
const LANGUAGE = "pl";
const appName = process.env.NEXT_PUBLIC_APPNAME;

const distributorCasePage = `
Kilkunastu handlowców, 3 zespoły sprzedażowe. 400 rodzajów produktów i kilkanaście rodzajów usług. 

Firma posiadała bardzo skomplikowany system premiowy oparty na różnego rodzaju premiach za różne grupy produktowe i usługowe. Do tego zaprojektowanych było kilka progów dla produktów innych niż dla usług. Liczenie wszystkich premii odbywało się ręcznie za pomocą EXCELA i wymagało od analityka kilku dni skupienia. Pracownicy dowiadywali się o premiach raz w miesiącu i mieli kilka dni na odwołanie co rodziło wiele konfliktów. 

Oprócz wdrożenia ${appName} stworzyliśmy także hurtownie danych, dzięki której transakcje były automatycznie przyporządkowywane do sprzedawcy. W efekcie integracji i wdrożenia kierownicy otrzymali możliwość tworzenia systemów prowizyjnych nawet bardziej przemyślanych i przez co skuteczniejszych niż wcześniej. Dodatkowo **proces liczenia został całkowicie wyeliminowany**. Podobnie wysyłanie raportów do pracowników. Każdy zainteresowany ma na bieżąco wgląd w swoje postępy. Przez co może podejmować o wiele bardziej **świadome decyzje** niż wcześniej. Kierownicy wiedzą komu pomóc, a pracownicy wiedzą ile im brakuje aby osiągnąć kolejny próg i co robić aby go przekroczyć. **Nie ma już konfliktów o prowizje** bo wszystko jest jasne i jeśli jakiś wystąpi to są one rozłożone a nie jak kiedyś skumulowane w momencie wysłania raportu.


`;

export default distributorCasePage;
