import React from "react";

interface GridProps {
  children: React.ReactNode;
}

const GallaryGrid = ({ children }: GridProps) => {
  return (
    <section
      className="
        grid
        grid-cols-2
        gap-4
        sm:grid-cols-2
        md:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-5
      "
    >
      {children}
    </section>
  );
};

export default GallaryGrid;
