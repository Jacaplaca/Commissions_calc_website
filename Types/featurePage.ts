import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type FeaturePageProps = {
  contentSource: MDXRemoteSerializeResult;
  url: string;
  pageName: string;
};
