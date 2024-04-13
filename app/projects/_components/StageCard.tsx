import Link from "next/link";
import { ChevronRight, Lock } from "lucide-react";

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
            ? "bg-green-light text-primary-text-light dark:bg-elevated-2-bg-dark dark:text-primary-text-dark"
            : "dark:bg-secondary-bg-dark dark:text-tertiary-text-dark"
        }
          flex
          w-full
          space-x-4

          rounded-xl
          p-4 
          sm:h-full

          items-center
        `}
      >
        {icon}
        <div className="block w-full items-start">
          <h4
            className="
              text-lg
            "
          >
            {title}
          </h4>
          <p
            className="
            line-clamp-4
            w-full
            text-balance
            text-sm
            font-light
            italic
            leading-tight
            text-secondary-text-light
            dark:text-secondary-text-light
            "
          >
            {description}
          </p>
        </div>
        <div className=" flex justify-between ">
          {/* <span>02/12</span> */}
          {state === "disabled" ? <Lock /> : <ChevronRight />}
        </div>
      </div>
    </Link>
  );
};

export default StageCard;
