import styled from "styled-components";
import { FunctionComponent } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Layout from "../index";

type Props = {
  mdxSerialized: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  .content {
    max-width: ${({ theme }) => theme.sizes.pageWidth};
    padding: 50px 30px;
    margin-top: 35px;
  }
`;

const SimpleMdxLayout: FunctionComponent<Props> = (props) => {
  const { mdxSerialized } = props;

  return (
    <Layout backgroundColor={"#ffffff"}>
      <Wrapper>
        <div className="content">
          {mdxSerialized && <MDXRemote {...mdxSerialized} />}
        </div>
      </Wrapper>
    </Layout>
  );
};

export default SimpleMdxLayout;
