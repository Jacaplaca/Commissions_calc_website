const FOLDER = "items";
const LANGUAGE = "pl";
const appName = process.env.NEXT_PUBLIC_APPNAME;

const thresholdsPage = `
<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/items.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

Zakładka widoczna tylko dla menadżerów i administratora.

Jeśli chcemy tworzyć grupy produktowe lub usługowe oraz tworzyć dla nich reguły, wtedy musimy dodać produkty/usługi/zdarzenia.

Elementy możemy dodawać pojedynczo lub importując z odpowiednio przygotowanego arkusza EXCEL. 

W lewym panelu dodajemy produkt w prawym jeśli chcemy możemy tworzyć grupy do których będziemy dodawać produkty.

Aby dodać produkt klikamy z lewej strony na + Dodaj. Pojawi się formularz. Możemy zdefiniować tam nazwę produkty/usługi/zdarzenia, nasz firmowy numer unikalny, np. z innego systemu oraz ewentualnie koszt czy cenę rekomendowaną.

Aby stworzyć grupę, klikamy w prawym panelu na + Stwórz nową grupę i wpisujemy jej nazwę.

Zauważ że po stworzeniu grupy nowa grupa jest pogrubiona i możesz dodawać do niej podgrupy. Np. tworzysz firmy, potem serie a dopiero tam umieszczasz produkty. Po stworzeniu grup zaznacz grupę w której chcesz umieścić produkty. Jeśli będzie pogrubiona możesz zaznaczyć w lewym panelu produkty i kliknąć na strzałkę między panelami, uwaga, podwójna przenosi wszystko.

Aby wyciągnąć produkt z grupy zaznaczamy go w prawym panelu i klikamy na strzałkę kierującą w lewym kierunku. Aby usunąć grupy czy produkty zaznaczamy kwadracikami i klikamy usuń. W każdym momencie możemy edytować produkty i zmieniać im ceny, nr oraz koszt zakupu/wytworzenia. 


`;

export default thresholdsPage;
