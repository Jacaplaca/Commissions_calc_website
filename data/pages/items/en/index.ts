const FOLDER = "items";
const LANGUAGE = "en";
const appName = process.env.NEXT_PUBLIC_APPNAME;

const thresholdsPage = `
<div className="image_container">
<img
  src="/pages/${FOLDER}/${LANGUAGE}/items.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

The tab is visible only to managers and administrators.

If you want to create product or service groups and create rules for them, you need to add products/services/events.

Elements can be added individually or imported from a properly prepared EXCEL sheet. 

In the left panel, we add the product. In the right one, if we want to, we can create groups to which we will add products.

To add a product, click on the left side on + Add. A form will appear. We can define the name of the product/service/event, our company's unique number, e.g., from another tool, and possibly the cost or recommended price.

To create a group, click in the right panel on + Create a new group and enter its name.

Note that the new group is bold after creating the group, and you can add subgroups to it. For example, you create companies, then series, and only there you put products. After creating groups, select the group in which you want to place products. If bold, you can select the products in the left panel and click on the arrow between the panels, note, double-chevron to move everything.

Select a product in the right panel and click on the arrow pointing in the left direction to pull a product from the group. To remove groups or products, select the boxes and click delete. You can edit the products and change their prices, number, and cost of purchase/production at any time.



`;

export default thresholdsPage;
