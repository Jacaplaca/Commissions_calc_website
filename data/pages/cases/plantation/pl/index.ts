const FOLDER = "cases/plantation";
const LANGUAGE = "pl";
const appName = process.env.NEXT_PUBLIC_APPNAME;

const plantationCasePage = `
Bardzo zaskoczyło nas zapytanie od farmera, który chciał skorzystać z ${appName} do rozliczenia osób zbierających borówkę. 

Klient był na początku zainteresowany napisaniem od nowa takiej aplikacji na swoje potrzeby ale doszedł do wniosku że **${appName} w 90% spełnia jego wymagania a dodatkowo zawiera kilka funkcjonalności**, o których nawet nie pomyślał bo oprócz zbierania danych, można te dane liczyć i udostępniać osobom pracującym na polu. 

Na początku z ${appName} mieli korzystać tylko kierownicy zmian. Okazało się jednak że dodawanie użytkowników i udostępnieni im ich wydajności pozwoli na większe zmotywowanie i **zdejmie z kierowników konieczność drukowania tabel z wydajnością**. Udało nam się więc skrócić cały proces liczenia premii przy dodaniu progów i udostępnieniu indywidualnych kont pracownikom.
`;

export default plantationCasePage;
