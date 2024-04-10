import { Carousel, CarouselContent } from "@/components/ui/carousel";
import React from "react";

interface InfoDataGridProps {
  children: React.ReactNode;
  className?: string;
}

const InfoDataGrid = ({ children, className }: InfoDataGridProps) => {
  return (
    <Carousel
      opts={{ loop: false, active: true, align: "start" }}
      className={`w-full //max-w-xs mx-auto, ${className}`}
    >
      <CarouselContent className="space-x-2 mx-0">{children}</CarouselContent>
    </Carousel>
  );
};

export default InfoDataGrid;
