import GallaryGrid from "@/components/common/GallaryGrid";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full animate-pulse flex flex-col gap-6">
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
        <div className="rounded-lg w-full aspect-square bg-elevated-2-bg-dark"></div>
        <div className="rounded-lg w-full aspect-square bg-elevated-2-bg-dark"></div>
        <div className="rounded-lg w-full aspect-square bg-elevated-2-bg-dark"></div>
        <div className="rounded-lg w-full aspect-square bg-elevated-2-bg-dark"></div>
        <div className="rounded-lg w-full aspect-square bg-elevated-2-bg-dark"></div>
      </GallaryGrid>
    </div>
  );
}
