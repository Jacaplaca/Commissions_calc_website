import { serialize } from "next-mdx-remote/serialize";

const paths: any = {
  notifications: "notifications",
};

const getPageContent = async ({ lang, url }: { lang: string; url: string }) => {
  // console.log("🚀 ~ file: getHelp.ts ~ line 10 ~ getHelp ~ path", path);
  const path = url.split("/")[1];
  const folder = paths[path] || "";
  console.log(
    "🚀 ~ file: getPageContent.ts ~ line 10 ~ getPageContent ~ folder",
    folder
  );
  if (folder) {
    try {
      const contentMdx = (await import(`../data/pages/${folder}/${lang}`))
        .default;
      const mdxSource = await serialize(contentMdx);
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
