import styled from "styled-components";
import { FunctionComponent } from "react";
import PageWrapper from "./Wrapper";

type Props = {};

const PageLayout: FunctionComponent<Props> = ({ children }) => {
  return <PageWrapper>{children}</PageWrapper>;
};

export default PageLayout;
