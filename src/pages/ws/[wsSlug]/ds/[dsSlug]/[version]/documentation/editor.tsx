import React from "react";
import { LeftPanel } from "components/left-panel";
import { TopPanel } from "components/top-panel";
import { ContentMain } from "components/content-main";
import { Layout } from "components/layout";
import dynamic from "next/dynamic";

let DocumentationEditor = dynamic(
  () => import("components/documentation-editor"),
  {
    ssr: false,
  }
);

export const DocumentationPage = () => {
  return (
    <Layout>
      <div className="flex">
        <LeftPanel />

        <div className="flex flex-col grow">
          <TopPanel />
          <div className="flex flex-col grow">
            <div className="flex grow">
              <ContentMain>
                <DocumentationEditor />
              </ContentMain>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DocumentationPage;
