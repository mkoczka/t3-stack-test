import React from "react";

export const TopPanel = () => {
  return (
    <header className="flex p-4 bg-black text-white">
      <span className="mx-4">Workspace</span>
      <span className="mx-4">Design system</span>
      <span className="mx-4">Release</span>
      <div className="ml-auto">Avatar</div>
    </header>
  );
};
