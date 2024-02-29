import React from "react";
import { type PageProps } from "./types";
import { Container } from "./styled";

const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <Container data-testid="page-container">
      <h1>{title}</h1>
      <>{children}</>
    </Container>
  );
};

export default Page;
