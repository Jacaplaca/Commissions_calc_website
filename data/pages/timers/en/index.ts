const FOLDER = "timers";
const LANGUAGE = "en";
const appName = process.env.NEXT_PUBLIC_APPNAME;

const timersPage = `
<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/timers.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

The tab is visible for everyone, but only managers and administrators can create a new project. This module is useful if you have a staff of temporary workers, e.g., remote working lawyers or other people who work on projects billed on an hourly basis.

In the project wizard, we can add projects, edit, delete and stop them. As a manager, when adding a project, we can select our team to participate in the project.

As an administrator, you can view the times of all users participating in the projects. The manager only has access to the times of his team. Normal users can only see their times.

If the project is active, we can turn on the stopwatch. We also can pause the time for a moment or stop the stopwatch. After clicking on "i" you can edit the stopwatch, add or time, add comments and assign tags that are only visible to the user.

In the panel visible for managers, we can filter the stopwatches in a given project by a user or the period in which they were created and, on this basis, see the summary. We also have an insight into the comment which has been attached to the stopwatch by the user.

As a manager, you can end the project with all the stopwatches in the project. This way, you will not be able to add new times by users or edit the stopwatches in the project.

`;

export default timersPage;
