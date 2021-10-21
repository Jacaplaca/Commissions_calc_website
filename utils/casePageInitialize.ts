import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getPageContent from "./getPageContent";

const paths: any = {};

type ExtendedProps = GetServerSidePropsContext & { locale: string };

const casePageInitialize: GetServerSideProps = async (props) => {
  const { locale, resolvedUrl, req } = props as ExtendedProps;

  const splitted = resolvedUrl.split("/");
  const folder = `${splitted[1]}/${splitted[2]}` || "";

  const contentSource = await getPageContent({
    lang: locale,
    folder,
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "footer",
        "subMenu",
      ])),
      contentSource,
      url: resolvedUrl,
      pageName: splitted[2],
    },
  };
};

export default casePageInitialize;
