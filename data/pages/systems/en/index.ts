const FOLDER = "systems";
const LANGUAGE = "en";
const appName = process.env.NEXT_PUBLIC_APPNAME;

const systemsPage = `
<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/systems.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

The tab is visible only to managers and administrators.

Here we can view all our systems. As administrators, we have access to all systems, as managers only to those our teams are assigned.

Systems can be edited, filtered, searched, and deleted. It is also very easy to clone the current system and create a new one on its basis. This feature is very useful when we create a new system every month, which has only slightly changed rules from the previous one.


`;

export default systemsPage;
