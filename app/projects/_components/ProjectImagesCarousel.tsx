import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ProjectImagesCarousel() {
  return (
    <Carousel
      opts={{ loop: false, active: true, align: "start" }}
      className="w-full //max-w-xs"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} 
          // className={`px-2 sm:basis-1/3`}
          >
            <div
              className="
              p-1
              aspect-video
              rounded-2xl
              bg-blue-light
              dark:bg-blue-dark
              "
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}
