import GallaryGrid from "@/components/common/GallaryGrid";
import Header from "@/components/feature/header/Header";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <Header title="Проекты" />
      <div className="flex w-full animate-pulse flex-col gap-6">
        <div
          className="
            h-[46px]
            w-full
            space-x-1
            rounded-xl
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
    </>
  );
}
