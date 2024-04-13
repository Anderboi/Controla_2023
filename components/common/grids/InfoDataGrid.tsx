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
      className={`//max-w-xs mx-auto, w-full ${className}`}
    >
      <CarouselContent className="mx-0 space-x-2">{children}</CarouselContent>
    </Carousel>
  );
};

export default InfoDataGrid;
