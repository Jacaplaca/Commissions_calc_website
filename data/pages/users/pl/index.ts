const FOLDER = "users";
const LANGUAGE = "pl";
const appName = process.env.NEXT_PUBLIC_APPNAME;

const thresholdsPage = `
<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/users.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

Zakładka tylko do wglądu dla administratora organizacji i menadżerów. Jednak menadżerowie mają mniejsze uprawienia.

Tutaj możemy zapraszać użytkowników lub usuwać ich z organizacji. 

Jako administrator możemy także przyznawać w tej zakładce uprawnienia użytkownikom lub je odbierać. Możemy uczynić kogoś menadżerem lub nawet administratorem, samemu tracąc tę funkcję. Menadżer będzie mógł samodzielnie zakładać zespoły, tworzyć systemy, ustalać progi czy zarządzać projektami czasowymi czyli stoperami.

W sekcji Zaproszenia mamy możliwość wysyłania zaproszeń, oraz ich wycofywania.


<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/user.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

`;

export default thresholdsPage;
