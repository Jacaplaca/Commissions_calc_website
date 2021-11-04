import { notification } from "antd";

const submitContactForm = <D>(data: D, t: (e: string) => string) => {
  fetch("/api/contact", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    console.log("Response received");
    if (res.status === 200) {
      console.log("Response succeeded!");
    }
  });

  notification["success"]({
    message: t("contactSent"),
    description: t("contactAfterSend"),
    duration: 10,
  });
};

export default submitContactForm;
