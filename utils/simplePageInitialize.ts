import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getPageContent from "./getPageContent";

const paths: any = {
  notifications: "notifications",
  chat: "chat",
  teams: "teams",
  thresholds: "thresholds",
  transactions: "transactions",
  rankings: "rankings",
  items: "items",
  systems: "systems",
  system_creator: "system_creator",
  timers: "timers",
  users: "users",
  organizations: "organizations",
};

type ExtendedProps = GetServerSidePropsContext & { locale: string };

const simplePageInitialize: GetServerSideProps = async (props) => {
  const { locale, resolvedUrl, req } = props as ExtendedProps;

  const path = resolvedUrl.split("/")[1];
  const folder = paths[path] || "";

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
      pageName: folder,
    },
  };
};

export default simplePageInitialize;
