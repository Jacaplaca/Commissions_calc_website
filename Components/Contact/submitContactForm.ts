import { notification } from "antd";

const submitContactForm = async <D>(data: D, t: (e: string) => string) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.status === 200) {
    notification["success"]({
      message: t("contactSent"),
      description: t("contactAfterSend"),
      duration: 10,
    });
    return true;
  } else {
    notification["error"]({
      message: t("contactNotSent"),
      duration: 10,
    });
    return false;
  }
};

export default submitContactForm;
