import { GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { serialize } from "next-mdx-remote/serialize";
const fs = require("fs");
const util = require("util");

type GetServerSideProps = GetServerSidePropsContext & { locale: string };

const initializePageMdx = async (props: GetServerSideProps) => {
  const { locale, resolvedUrl } = props;
  const folderName = resolvedUrl.split("/")[1];
  const folder = `./public/pages/${folderName}/${locale}/`;
  const readFile = util.promisify(fs.readFile);
  const data = await readFile(folder + "content.mdx", "utf8");
  console.log("🚀 ~ file: privacy.tsx ~ line 38 ~ getStaticProps ~ data", data);
  const mdxSerialized = await serialize(data);

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "footer",
        "subMenu",
      ])),
      mdxSerialized,
    },
  };
};

export default initializePageMdx;
