import styled from "styled-components";
import { FunctionComponent } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import antdBreakpoints from "../../../themes/antdBreakpoints";

type Props = {
  content: MDXRemoteSerializeResult;
};
const Wrapper = styled.section`
  max-width: ${({ theme }) => theme.sizes.pageWidth};
  /* border-top: 30px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-bottom: 12px;
    max-width: 600px;
    text-align: justify;
    font-weight: 400;
    font-size: 1.1em;
    line-height: 1.7em;
    font-family: "Open Sans", sans-serif;
    text-indent: 4em;
    padding: 0 ${({ theme }) => theme.sizes.paddingLayoutHorizontal};
    @media ${antdBreakpoints.smMax} {
      line-height: 1.5em;
      font-size: 1.03em;
    }
  }
  .spacer {
    min-height: 20px;
  }
  .margin_right_10 {
    margin-right: 10px !important;
  }
  .info {
    padding: 13px;
    background: #f5f5f5;
    border-radius: 15px;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
  .two_columns {
    display: flex;
    align-items: center;
  }
  .image_container {
    /* background: red; */
    display: flex;
    justify-content: center;
  }
  .one_image {
    margin: 40px 0px;
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 5px 20px -3px rgb(0 0 0 / 27%);
    /* background: yellow; */
    /* width: fit-content; */
  }
`;

const PageContent: FunctionComponent<Props> = ({ content }) => {
  return <Wrapper>{content && <MDXRemote {...content} />}</Wrapper>;
};

export default PageContent;
