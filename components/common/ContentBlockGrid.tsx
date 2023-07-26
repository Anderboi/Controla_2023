import React from "react";

const ContentBlockGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-3
        sm:grid-cols-2
        "
    >
      {children}
    </div>
  );
};

export default ContentBlockGrid;
