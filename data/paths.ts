const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

const paths = {
  freePlan: "/plans",
  pricing: "/plans",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
  facebookFanPage: "https://www.facebook.com/swiadomafirma/",
  appSignUpFree: `${APP_URL}/signup?plan=free`,
  appSignUpBasic: `${APP_URL}/signup?plan=basic`,
  appSignUpPro: `${APP_URL}/signup?plan=pro`,
};

export default paths;
