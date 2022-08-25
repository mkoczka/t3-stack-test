import ActiveLink from "./active-link";

export const MyLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <ActiveLink activeClassName="font-bold" href={href}>
      <div>
        <a className="cursor-pointer">{children}</a>
      </div>
    </ActiveLink>
  );
};
