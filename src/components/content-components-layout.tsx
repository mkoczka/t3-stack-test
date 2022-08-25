import React from "react";
import { LeftPanel } from "components/left-panel";
import { TopPanel } from "components/top-panel";
import { ContentHeader, ContentHeaderPages } from "components/content-header";
import { ContentMain } from "components/content-main";
import { Layout } from "components/layout";

export const ContentComponentsLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <Layout>
      <div className="flex">
        <LeftPanel />

        <div className="flex flex-col grow">
          <TopPanel />

          <div className="flex flex-col grow">
            <ContentHeader activePage={ContentHeaderPages.components} />

            <div className="flex grow">
              <ContentMain>
                <h1 className="text-3xl font-bold">{title}</h1>
                {children}
              </ContentMain>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
