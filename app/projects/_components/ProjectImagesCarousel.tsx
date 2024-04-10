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
      opts={{ loop: true, active: true, align: "start", direction: 'ltr' }}
      className="w-full //max-w-xs mx-auto"
    >
      <CarouselContent className='sm:mx-0'>
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className={`sm:px-1 sm:basis-1/5`}>
            <div
              className="
              //p-1
              aspect-video
              sm:aspect-square
              rounded-xl
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
