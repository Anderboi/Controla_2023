import { ChevronRight, Lock } from "lucide-react";
import Link from "next/link";

interface Props {
  href: string;
  icon: JSX.Element;
  title: string;
  description?: string;
  state: "active" | "inactive" | "disabled";
  className?: string;
}
const StageCard = ({
  href,
  icon,
  title,
  description,
  state,
  className,
}: Props) => {
  return (
    <Link
      href={href}
      className={`${state === "disabled" && "dark:text-tertiary-text-dark"}`}
    >
      <div
        className={`${className} ${
          state === "active"
            ? "bg-green-light dark:bg-elevated-2-bg-dark dark:text-primary-text-dark text-primary-text-light"
            : "dark:bg-secondary-bg-dark dark:text-tertiary-text-dark"
        }
          p-4
          rounded-xl
          space-x-4
          //h-full
          flex

          w-full
          //max-sm:w-fit 
          //max-sm:min-w-[12rem]
        `}
      >
        {icon}
        <div className="block items-start w-full">
          <h4
            className="
              text-lg
            "
          >
            {title}
          </h4>
          <p
            className="
            w-full
            line-clamp-4
            leading-tight
            italic
            font-light
            text-sm
            text-balance
            text-secondary-text-light
            dark:text-secondary-text-light
            "
          >
            {description}
          </p>
        </div>
        <div className="flex justify-between //items-center ">
          {/* <span>02/12</span> */}
          {state === "disabled" ? <Lock /> : <ChevronRight />}
        </div>
      </div>
    </Link>
  );
};

export default StageCard;
