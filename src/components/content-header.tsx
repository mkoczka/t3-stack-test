import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export enum ContentHeaderPages {
  tokens = "tokens",
  components = "components",
}

const ContentHeaderLink = ({
  href,
  text,
  activePage,
  page,
}: {
  href: string;
  text: string;
  activePage: ContentHeaderPages;
  page: string;
}) => {
  return (
    <Link href={href}>
      <a className={activePage === page ? "font-bold" : ""}>{text}</a>
    </Link>
  );
};

export const ContentHeader = ({
  activePage,
}: {
  activePage: ContentHeaderPages;
}) => {
  const router = useRouter();
  const { wsSlug, dsSlug, version, brand } = router.query;

  const url = `/ws/${wsSlug}/ds/${dsSlug}/${version}/content/${brand}`;

  return (
    <div className="flex">
      <div className="border-gray-300 border-r border-b p-2 w-80">Default</div>

      <main className="flex border-gray-300 border-b p-2 w-full">
        <div className="mx-2">
          <ContentHeaderLink
            href={`${url}/tokens/colors`}
            text="TOKENS"
            activePage={activePage}
            page={ContentHeaderPages.tokens}
          />
        </div>
        <div className="mx-2">
        <ContentHeaderLink
            href={`${url}/components`}
            text="COMPONENTS"
            activePage={activePage}
            page={ContentHeaderPages.components}
          />
        </div>
        <div className="mx-2">ASSETS</div>
        <div className="mx-2">RESOURCES</div>
      </main>
    </div>
  );
};
