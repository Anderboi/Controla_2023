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
        gap-6
        sm:grid-cols-2
        md:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-5
      "
    >
      {children}
    </section>
  );
};

export default GallaryGrid;
