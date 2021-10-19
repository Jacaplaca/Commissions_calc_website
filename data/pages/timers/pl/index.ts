const FOLDER = "timers";
const LANGUAGE = "pl";
const appName = process.env.NEXT_PUBLIC_APPNAME;

const timersPage = `
<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/timers.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

Zakładka widoczna dla wszystkich, jednak tylko menadżerowie i administrator mogą stworzyć nowy projekt. Jest to przydatny moduł jeśli rozliczamy się czasowo z pracownikami, np. pracującymi zdalnie prawnikami czy innymi osobami, które pracują nad projektami rozliczanymi godzinowo.

W kreatorze projektów możemy dodawać projekty, edytować je, usuwać oraz zatrzymywać. Jako menadżer podczas dodawania projektu możemy wybrać nasz zespół, dzięki temu jego członkowie będą mogli wziąć udział w projekcie.

Jako administrator możemy przeglądać czasy wszystkich użytkowników uczestniczących w projektach, menadżer ma dostęp tylko do czasów swoich zespołów, zwykły użytkownik widzi tylko swoje czasy.

Jeśli projekt jest aktywny możemy włączyć stoper. Mamy również możliwość wstrzymania na chwilę czasu lub zatrzymania stopera. Po kliknięciu na „i” możemy edytować stoper, dodać lub czas, dodać komentarz oraz przydzielić tagi, które są tylko widoczne na użytkownika.

W panelu widocznym dla menadżerów możemy filtrować stopery w danym projekcie po użytkowniku, czy okresie w którym zostały utworzone i na tej podstawie prowadzić statystyki. Mamy wgląd także w komentarz, który został dołączony przez użytkownika do danego stopera.

Jako menadżer możemy zakończyć projekt wraz ze wszystkimi działającymi w nim stoperami tym samym blokując możliwość dodawania nowych czasów przez użytkowników oraz edycję obecnych w projekcie stoperów.

`;

export default timersPage;
