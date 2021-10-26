const FOLDER = "transactions";
const LANGUAGE = "en";
const appName = process.env.NEXT_PUBLIC_APPNAME;

const transactionsPage = `



<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/transactions_pc.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

Tab visible to all users. Users with a manager profile can manage the transactions of all members of their teams. Regular users can see, and if given the option when creating the system, can manage their trades/actions during the system. 

Each transaction can also contact a person, whether a manager with an employee or vice versa. So we can open a chat window in a transaction and send a query. The user on the top bar will receive a notification.

We can filter transactions by user, system, and period.

<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/transactions_mobile.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

In the Summary tab, we can review a detailed report on the transactions of selected users. 

<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/team.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>
<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/progress.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

In the Details tab, you will find the regulations of the commission system and the commission table if the system contains rules. 

The Transactions tab gives a regular user quick access to all their transactions, regulations, and reports with rankings.
`;

export default transactionsPage;
