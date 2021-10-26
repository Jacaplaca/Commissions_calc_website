const FOLDER = "thresholds";
const LANGUAGE = "en";
const appName = process.env.NEXT_PUBLIC_APPNAME;

const thresholdsPage = `
<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/thrs.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

All managers and administrators have access to this tab. Here every manager can add thresholds and test them. Editing or deleting thresholds here does not affect running systems.

Creating and calculating thresholds is not one of the most pleasant parts of working on a commission system. Therefore, when designing ${appName}, we decided to make this part of the process as simple and flexible as possible. In this section, we can define many thresholds, save them and edit them for future use. More complicated sets can be cloned and used to create new versions. These thresholds can then be copied to systems and set as individual or team. 

Defining each threshold, we set its minimum value. The threshold ends where the next one begins if it is bigger. We can give a fixed bonus after exceeding the threshold, for example, 100 after reaching 1000, and 150 after 2000. In addition, we can set the % that the user/team earns after exceeding the threshold. The default is a % of the excess over the beginning of the threshold. For example, if we set the first threshold to 1000 and 5%, and the second to 2000 and 7%, the employee who reaches 1500 will receive 5% of 500, which is 25. If the employee reaches 2500, he will receive 50 or 5% of 1000 as the difference between 2000 - 1000 and 7% of 2500-2000 or 35, a total of 85 resulting from the percentage bonus. We can also reward employees who exceed a higher threshold with a higher % for the total, so we automatically change the % of the lower thresholds. Then the percentage commission from the amount of 2500 will be 175 because from 0 to 1000 the employee previously had 0% and now 7, so 70 + 70 for the second threshold from 1000 to 2000 and 35 for the third threshold from 2000 upwards.

We can also simulate a given amount on all our sets of thresholds at any time.
`;

export default thresholdsPage;
