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
      className="//max-w-xs mx-auto w-full"
    >
      <CarouselContent className='sm:mx-0'>
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className={`sm:basis-1/5 sm:px-1`}>
            <div
              className="
              //p-1
              aspect-video
              rounded-xl
              bg-blue-light
              dark:bg-blue-dark
              sm:aspect-square
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
