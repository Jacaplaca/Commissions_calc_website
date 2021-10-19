const FOLDER = "transactions";
const LANGUAGE = "pl";
const appName = process.env.NEXT_PUBLIC_APPNAME;

const transactionsPage = `



<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/transactions_pc.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

Zakładka widoczna dla wszystkich użytkowników. Użytkownicy o profilu menadżera mogą zarządzać transakcjami wszystkich członków swoich zespołów. Zwykli użytkownicy widzą, i jeśli otrzymali taką możliwość przy kreowaniu systemu, mogą zarządzać w trakcie trwania systemu swoimi transakcjami/akcjami. 

Każda transakcja może służyć również jako sposób kontaktu z osobą czy to menadżera z pracownikiem czy odwrotnie. Możemy więc otworzyć okienko chatu w transakcji i wysłać w nim zapytanie dotyczące tej konkretnej pozycji. Użytkownik na górnej belce otrzyma powiadomienie.

Mamy możliwość filtrowania transakcji po użytkowniku, systemie oraz okresie.

<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/transactions_mobile.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

W zakładce Podsumowanie mamy możliwość przeglądu szczegółowego raportu o transakcjach wybranych użytkowników. 

<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/team.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>
<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/progress.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

W zakładce Szczegóły znajdziemy regulamin systemu prowizyjnego oraz tabelę prowizji jeśli system zawiera reguły. 

Zakładka Transakcje została tak przygotowana aby zwykły użytkownik miał szybki dostęp do wszystkich swoich transakcji, regulaminów oraz raportów wraz z rankingami.

`;

export default transactionsPage;
