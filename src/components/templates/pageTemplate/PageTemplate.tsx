import React from "react";

// Components
import Header from "../../modules/Header/Header";

// Style
import { PageTemplateWrapper } from "./pageTemplate.style";

interface PageTemplateProps {
  children: React.ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  return (
    <PageTemplateWrapper>
      <Header />
      {children}
    </PageTemplateWrapper>
  );
};

export default PageTemplate;
