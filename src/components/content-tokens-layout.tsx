import React from "react";
import { LeftPanel } from "components/left-panel";
import { TopPanel } from "components/top-panel";
import { ContentHeader, ContentHeaderPages } from "components/content-header";
import { ContentLeftPanel } from "components/content-left-panel";
import { ContentMain } from "components/content-main";
import { Layout } from "components/layout";

export const ContentTokensLayout = ({
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
            <ContentHeader activePage={ContentHeaderPages.tokens} />

            <div className="flex grow">
              <ContentLeftPanel />

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
