const FOLDER = "systems";
const LANGUAGE = "pl";
const appName = process.env.NEXT_PUBLIC_APPNAME;

const systemsPage = `
<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/systems.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

Zakładka widoczna tylko dla menadżerów i administratora.

W tym miejscu możemy przeglądać wszystkie systemy do których mamy dostęp. Jako administrator mamy dostęp do wszystkich systemów, jako menadżer tylko do tych, do których są dopisane nasze zespoły.

Systemy możemy edytować, filtrować, wyszukiwać i usuwać. Możemy również w bardzo prosty sposób sklonować obecny system i na jego podstawie stworzyć nowy. Jest to bardzo przydatne gdy chcemy co miesiąc tworzyć nowy system, który ma tylko trochę zmienione zasady od poprzedniego.


`;

export default systemsPage;
