import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const staticPropsInitialize = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer", "subMenu"])),
  },
});

export default staticPropsInitialize;
