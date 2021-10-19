const FOLDER = "rankings";
const LANGUAGE = "pl";
const appName = process.env.NEXT_PUBLIC_APPNAME;

const rankingsPage = `
<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/users.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

W zakładce Ranking użytkowników możemy przejrzeć (jeśli mamy takie uprawnienia) jak dany użytkownik radził sobie na tle innych. Jego udział procentowy oraz miejsce w rankingu. Sprawdzimy tam też wielkość prowizji indywidualnych oraz zespołowych dla danych użytkowników. 

Zakładka Ranking zdarzeń pozwoli nam sprawdzić, które produkty/usługi/zdarzenia były najbardziej popularne w danym systemie prowizyjnym, w którym przewidzieliśmy ustalenie reguł dla konkretnych produktów. Sprawdzimy tam również ranking użytkowników, tylko w odniesieniu do konkretnego produktu czy usługi. 

`;

export default rankingsPage;
