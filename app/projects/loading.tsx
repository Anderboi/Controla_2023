import ContainerBox from '@/components/common/ContainerBox';
import GallaryGrid from '@/components/common/grids/GallaryGrid';
import Header from "@/components/feature/header/Header";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <Header title="Проекты" />
      <div
        className="
            h-12
            w-full
            animate-pulse
            space-x-1
            !rounded-xl
            bg-elevated-2-bg-dark
            "
      ></div>
      <ContainerBox className="size-full p-6">
        <div className="flex w-full animate-pulse flex-col gap-4">
          <GallaryGrid>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="aspect-square w-full rounded-lg bg-elevated-2-bg-dark"></div>
            ))}
            </GallaryGrid>
        </div>
      </ContainerBox>
    </>
  );
}
