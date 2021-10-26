const FOLDER = "rankings";
const LANGUAGE = "en";
const appName = process.env.NEXT_PUBLIC_APPNAME;

const rankingsPage = `
<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/users.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

In the user Ranking tab, we can see (if we have such privileges) how a particular user performed in comparison to others. You can see the percentage of the user's performance and their place in the ranking. We will also check the size of the individual and team commissions for given users. 

The tab Event ranking will allow us to check which products/services/events were the most popular in the given commission system, which we have provided for setting rules for specific products. We will also check the ranking of users only with a specific product or service. 


`;

export default rankingsPage;
