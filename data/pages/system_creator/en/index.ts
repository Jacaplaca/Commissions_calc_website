const FOLDER = "system_creator";
const LANGUAGE = "en";
const appName = process.env.NEXT_PUBLIC_APPNAME;

const system_creatorPage = `


Screen 1 (Main settings): We name the system, choose the currency, the team, and the duration of the system. We can also grant the user the ability to add and edit his transactions. Otherwise, he will only be able to see them if he has access to the account. We can also specify how many days after the end of the system we will add or edit transactions. Here we also have the option of enabling the ranking and specifying the data that will be seen by system participants, e.g., whether the data of colleagues will be visible or/and whether their results will be visible or hidden. In this step, we can also put the regulations of the commission system.

Screen #2 (Team Thresholds): In addition to setting the thresholds for the team, we have the option to set how the team bonus will be divided. For example, whether it will be divided equally, regardless of the contribution of individual people, and whether to include people with zero contribution when dividing.


<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/personalized.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

Screen 3 (User thresholds): Once thresholds have been selected or created, we can assign them to all users who are on the team selected on the first screen. We can also simulate the effect of thresholds on bonuses.

Screen 4 (Individual Thresholds): Here we can edit the thresholds individually for each team member assigned to the system. We can also restore the thresholds from screen #3.

<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/rules.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

Screen number 5 (Rules for events): Here we can create rules for different products or services. We can group the products and services and thus quickly create the necessary rules. There are 2 types of rules. It is a fixed amount and percentage. In addition, we can use the percentage rule for the margin only (if the product is assigned a price and cost). In this way, when adding a transaction will be visible margin and commission calculated based on the rule and cost of the product.


`;

export default system_creatorPage;
