const FOLDER = "thresholds";
const LANGUAGE = "pl";
const appName = process.env.NEXT_PUBLIC_APPNAME;

const thresholdsPage = `
<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/thrs.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

Dostęp do tej zakładki mają wszyscy menadżerowie oraz administrator. Jest to miejsce gdzie każdy może dodawać progi i je testować. Edycja czy kasowanie progów w tym miejscu nie ma wpływu na działające systemy.

Tworzenie i wyliczanie progów nie należy do najprzyjemniejszych elementów pracy nad systemem prowizyjnym dlatego podczas projektowania ${appName} postanowiliśmy jak najmocniej uprościć i uelastycznić ten element procesu. W tej sekcji możemy zdefiniować wiele progów, zapisać je oraz edytować. Bardziej skomplikowane zestawy możemy klonować i na ich postawie tworzyć nowe wersje. Progi te następnie możemy kopiować do systemów i ustawiać je jako indywidualne lub zespołowe. 

Definiując każdy próg ustalamy jego minimalną wartość, próg się kończy tam gdzie zaczyna się następny jeśli jest większy. Możemy przyznać po przekroczeniu danego progu kwotę stałą premii, np. 100 po osiągnięciu 1000, a 150 po 2000. Oprócz tego mamy możliwość ustalenia % który będzie wypłacany po przekroczeniu progu. Domyślnie jest to % nadwyżki nad początkiem progu. Np. jeśli ustalimy 1. próg na 1000 i 5%, a drugi na 2000 i 7% to pracownik osiągający 1500 otrzyma 5% z 500 czyli 25. Jeśli pracownik uzyska 2500, wtedy otrzyma 50 czyli 5% z 1000 jako różnicy 2000 – 1000 i 7% z 2500-2000 czyli 35, razem 85 wynikających z premii procentowej. Możemy również nagradzać pracowników którzy przekroczyli wyższy próg wyższym % za całość czyli automatycznie zmieniamy % niższych progów. Wtedy prowizja procentowa od kwoty 2500 wyniesie 175 ponieważ od 0 do 1000 pracownik miał wcześniej 0% a teraz 7 czyli 70 + 70 za drugi próg od 1000 do 2000 i 35 za 3 próg od 2000 wzwyż.

W każdej chwili możemy również zasymulować daną kwotę na wszystkich naszych zestawach progów.

`;

export default thresholdsPage;
