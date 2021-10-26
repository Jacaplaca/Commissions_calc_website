const FOLDER = "teams";
const LANGUAGE = "en";

const teamsPage = `
<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/teams.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

Tab visible only to managers and admin.

However, managers can only see their teams. After creating a team, you can set any user as a team manager if you are the administrator. We can also directly from here send an email invitation to the user to join the organization. In the panel below, we can see the users who have already joined our organization. There we can assign them to the team or remove them from it. We can also add all users to the team and remove them with one click.

`;

export default teamsPage;
