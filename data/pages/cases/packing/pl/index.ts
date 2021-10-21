const FOLDER = "cases/packing";
const LANGUAGE = "pl";
const appName = process.env.NEXT_PUBLIC_APPNAME;

const packingCasePage = `
${appName} możemy wykorzystać nie tylko do wynagradzania sprzedaży. Możemy go także użyć do liczenia wydajności wewnątrz firmy. Nasz klient to firma, która często wysyła duże paczki. Jest ich kilka rodzajów, a pakowanie trwa od kilkunastu do kilkudziesięciu minut. Przed rozpoczęciem korzystania z ${appName} każdy pracownik naklejał swoją naklejkę na paczkę a kierownik skanował a kolejny skanował paczki w magazynie i dodawał je do systemu, na tej podstawie kierownik liczył raz na miesiąc wydajność każdego pracownika i na tej podstawie wyliczał premie kilkunastu osobom.

${appName} pozwoliło jeszcze bardziej zautomatyzować ten proces. Paczki są nadal skanowane ale ta operacje dodaje je także do ${appName}. Klient poprosił nas o integracje z dotychczasowym systemem. **Zmniejszyła się bardzo ilość pracy kierownika przy wyliczaniu premii** ponieważ już nie musi eksportować danych z systemu i indywidualnie liczyć każdemu premii. Proces był już wcześniej bardzo zautomatyzowany więc w wypadku ${appName} nie pokazał swojej mocnej przewagi, ale ujawniła się ona w momencie jak pozwolono pracownikom na wgląd w swoją wydajność. **Niektórzy sprawdzają codziennie swoje wyniki co doprowadziło do 7.4% zwiększenia wydajności** działu pakującego. Skrócono też czas liczenia premii z comiesięcznej na raz w tygodniu.



`;

export default packingCasePage;
