import { serialize } from "next-mdx-remote/serialize";

const getPageContent = async ({
  lang,
  folder,
}: {
  lang: string;
  folder: string;
}) => {
  if (folder) {
    try {
      const contentMdx = (await import(`../data/pages/${folder}/${lang}`))
        .default;
      console.log(
        "🚀 ~ file: getPageContent.ts ~ line 13 ~ contentMdx",
        contentMdx
      );
      const mdxSource = await serialize(contentMdx);
      // console.log(
      //   "🚀 ~ file: getPageContent.ts ~ line 19 ~ mdxSource",
      //   mdxSource
      // );
      return mdxSource;
    } catch (error) {
      console.log("🚀 ~ file: getHelp.ts ~ line 14 ~ getHelp ~ error", error);
      const mdxSource = await serialize("");
      return mdxSource;
    }
  }
  const mdxSource = await serialize("");
  return mdxSource;
};

export default getPageContent;
