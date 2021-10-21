import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type CasePageProps = {
  contentSource: MDXRemoteSerializeResult;
  url: string;
  pageName: string;
};
