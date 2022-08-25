import React from "react";

export const ContentMain = ({children}: { children: React.ReactNode }) => {
  return (
    <main className="p-8 w-full">
      {children}
    </main>
  );
};
