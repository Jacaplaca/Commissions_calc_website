const FOLDER = "organizations";
const LANGUAGE = "pl";
const appName = process.env.NEXT_PUBLIC_APPNAME;

const thresholdsPage = `
<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/organizations.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

W tym miejscu administrator może usunąć lub edytować swoją organizację. Pracownik również może być zarejestrowany w wielu organizacjach.

W ramach ${appName} możemy prowadzić systemy prowizyjne dla wielu organizacji. Wystarczy tylko dodać kolejną organizację i ją wybrać aby móc nią zarządzać.


`;

export default thresholdsPage;
