import ContainerBox from '@/components/common/ContainerBox';
import GallaryGrid from '@/components/common/grids/GallaryGrid';
import Header from "@/components/feature/header/Header";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <Header title="Проекты" />
      <ContainerBox className="h-full w-full p-6">
        <div className="flex w-full animate-pulse flex-col gap-4">
          <div
            className="
            h-[36px]
            w-full
            space-x-1
            rounded-lg
            bg-elevated-2-bg-dark
            "
          ></div>
          <GallaryGrid>
            <div className="aspect-square w-full rounded-lg bg-elevated-2-bg-dark"></div>
            <div className="aspect-square w-full rounded-lg bg-elevated-2-bg-dark"></div>
            <div className="aspect-square w-full rounded-lg bg-elevated-2-bg-dark"></div>
            <div className="aspect-square w-full rounded-lg bg-elevated-2-bg-dark"></div>
            <div className="aspect-square w-full rounded-lg bg-elevated-2-bg-dark"></div>
          </GallaryGrid>
        </div>
      </ContainerBox>
    </>
  );
}
