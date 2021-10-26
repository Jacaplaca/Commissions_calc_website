const FOLDER = "users";
const LANGUAGE = "en";
const appName = process.env.NEXT_PUBLIC_APPNAME;

const thresholdsPage = `
<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/users.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

This tab is showing only for organization administrators and managers. However, managers have lesser privileges.

Here we can invite users or remove them from the organization. 

As an administrator, we can also grant or revoke permissions to users in this tab. We can make someone a manager or even an administrator, losing this function ourselves. The manager will set up teams, create systems, set thresholds, or manage time projects or stopwatches.

In the Invitations section, we can send invitations and withdraw them.

<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/user.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

`;

export default thresholdsPage;
