import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getPageContent from "./getPageContent";

// const initializeServer =
//   store =>
//   async ({ req, res, ...etc }) => {
//     const { resolvedUrl } = etc;
//     console.log("🚀 ~ file: initializeServer.ts ~ line 8 ~ resolvedUrl", resolvedUrl);
//     const path = resolvedUrl.split("?")[0];
//     await authenticateOrRedirect({ req, store, res, path });
//     const helpSource = await getHelp({ req, path });
//     return { props: { helpSource } };
//   };

type ExtendedProps = GetServerSidePropsContext & { locale: string };

const simplePageInitialize: GetServerSideProps = async (props) => {
  const { locale, resolvedUrl, req } = props as ExtendedProps;
  const contentSource = await getPageContent({
    lang: locale,
    url: resolvedUrl,
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
    },
  };
};

export default simplePageInitialize;
