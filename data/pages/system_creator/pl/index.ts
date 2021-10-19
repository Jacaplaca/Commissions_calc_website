const FOLDER = "system_creator";
const LANGUAGE = "pl";
const appName = process.env.NEXT_PUBLIC_APPNAME;

const system_creatorPage = `


Ekran nr 1 (Główne ustawienia): Nadajemy nazwę systemowi, wybieramy walutę, zespół oraz okres trwania systemu. Możemy też przyznać użytkownikowi możliwość dodawanie i edycji jego transakcji. W przeciwnym razie będzie mógł je tylko widzieć jeśli będzie miał dostęp do konta. Możemy również określić ile dni po zakończeniu systemu będziemy użytkownik będzie mógł dodawać czy edytować transakcje. W tym miejscu mamy także opcję włączeniu rankingu i określenia danych, które będą widzieć uczestniczy systemu, np. czy będą widoczne dane koleżanek i kolegów lub/i czy będą widoczne ich wyniki albo czy mają być ukryte. W tym kroku możemy umieścić także regulamin systemu prowizyjnego.

Ekran nr 2 (Progi dla zespołu). Oprócz ustawienia progów dla zespołu mamy możliwość ustalenia sposobu podziału premii zespołowej. Czy np. będzie dzielona po równo, niezależnie od wkładu poszczególnych osób oraz czy przy podziale uwzględnić osoby z zerowym wkładem.

<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/personalized.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

Ekran nr 3 (Progi dla użytkowników). Po wybraniu lub stworzeniu progów możemy przydzielić je wszystkim użytkownikom, którzy są w wybranym na pierwszym ekranie zespole. Możemy również symulować wpływ progów na premie.

Ekran nr 4 (Progi indywidualne). Tutaj mamy możliwość edycji progów indywidualnie dla każdego członka zespołu przypisanego do systemu. Możemy także przywrócić progi z ekranu nr 3.

<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/rules.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

Ekran nr 5 (Reguły dla zdarzeń). Jest to miejsce gdzie możemy tworzyć reguły dla różnych produktów czy usług. Produkty i usługi możemy grupować i dzięki temu tworzyć szybko potrzebne reguły. Są 2 rodzaje reguł. Jest to kwota stała i procent. Oprócz tego regułę procentową możemy stosować nie dla całej kwoty ale dla marży jeśli produktowi przypiszemy cenę oraz koszt. Dzięki temu podczas dodawania transakcji będzie widoczna marża i prowizja wyliczona na podstawie reguły i kosztu produktu.


`;

export default system_creatorPage;
