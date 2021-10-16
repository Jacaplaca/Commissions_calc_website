const FOLDER = "teams";
const LANGUAGE = "pl";

const teamsPage = `
<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/teams.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

Zakładka widoczna tylko dla menadżerów i administratora.

Jednakże menadżerowie widzą tylko swoje zespoły. Po stworzeniu zespołu mamy możliwość jeśli jesteśmy administratorem ustawienia dowolnego użytkownika menadżerem zespołu. Możemy także bezpośrednio z tego miejsca wysłać zaproszenie użytkownikowi na email aby przyłączył się do organizacji. W panelu poniżej widzimy użytkowników którzy już przyłączyli się do naszej organizacji, tam możemy ich przydzielać do zespołu lub z niego usuwać. Możemy także jednym kliknięciem dodać wszystkich do zespołu oraz z niego usunąć.
`;

export default teamsPage;
