import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <main className="font-work-sans">(root)Layout{children}</main>;
};

export default layout;
