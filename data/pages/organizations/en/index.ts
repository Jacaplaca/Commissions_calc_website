const FOLDER = "organizations";
const LANGUAGE = "en";
const appName = process.env.NEXT_PUBLIC_APPNAME;

const thresholdsPage = `
<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/organizations.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

Here the administrator can delete or edit his organization. A regular user can also register in multiple organizations.

Under ${appName}, we can run commission schemes for multiple organizations. Just add another organization and select it to manage it.



`;

export default thresholdsPage;
