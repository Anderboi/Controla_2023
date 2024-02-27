import {
  Brush,
  ChevronRight,
  PaintRoller,
  PencilRuler,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

const ProjectPage = ({ params }: { params: { id: number } }) => {
  const projectId = params.id;

  return (
    <div
      className="
        dark:text-secondary-text-dark
        grid
        grid-cols-2
        sm:grid-cols-4
        gap-2
        w-full
        overflow-auto
        no-scrollbar
        "
    >
      <Link
        href={`${projectId}/preProject`}
        className="
        dark:bg-secondary-bg-dark
        p-4
        rounded-lg
        text-base
        space-y-8
        "
      >
        <Brush />
        <div className="flex gap-2 items-end">
          <span>Эскизная стадия</span>
          <ChevronRight />
        </div>
      </Link>
      <div
        className="
        dark:bg-secondary-bg-dark
        p-4
        rounded-lg
        text-base
        space-y-8
        "
      >
        <PencilRuler />
        <div className="flex gap-2  items-end">
          <span>Проектные данные</span>
          <ChevronRight />
        </div>
      </div>
      <div
        className="
        dark:bg-secondary-bg-dark
        p-4 
        rounded-lg 
        text-base
        space-y-8
        "
      >
        <ShoppingCart />
        <div className="flex gap-2 items-end">
          <span>Комплектация</span>
          <ChevronRight />
        </div>
      </div>
      <div
        className="
        dark:bg-secondary-bg-dark
        p-4 
        rounded-lg 
        text-base
        space-y-8
        "
      >
        <PaintRoller />
        <div className="flex gap-2 items-end">
          <span>Строительство</span>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
