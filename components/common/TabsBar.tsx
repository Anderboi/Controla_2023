"use client";

import React from "react";
import Chips from "./inputs/Chips";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const TabsBar = () => {
  const route = useRouter();
  const path = usePathname();
  const exactRoute = path.split("/")[path.split("/").length - 1];

  return (
    <>
      <div className="pb-6 sm:hidden">
        <select
          name="stages"
          id="stages"
          onChange={(i) => route.push(i.target.value)}
        >
          <option value="preProject">Предпроектная стадия</option>
          <option value="concept">Эскизная стадия</option>
          <option value="working">Рабочая стадия</option>
          <option value="furnishing">Комплектация</option>
          <option value="construction">Строительство</option>
        </select>
      </div>
      <ul
        className="
          hidden
          h-fit
          min-h-[64px]
          w-full
          items-center
          justify-start
          gap-3
          overflow-x-scroll
          scroll-smooth
          pb-6
          no-scrollbar
          scrolling-touch
          sm:flex
          "
      >
        <li>
          <Chips type="md" isActive={exactRoute === "preProject"}>
            <Link href={"preProject"}>Предпроектная стадия</Link>
          </Chips>
        </li>
        <li>
          <Chips type="md" isActive={exactRoute === "concept"} disabled>
            <Link href={"concept"}>Эскизная стадия</Link>
          </Chips>
        </li>
        <li>
          <Chips type="md" isActive={exactRoute === "working"} disabled>
            <Link href={"working"}>Рабочая стадия</Link>
          </Chips>
        </li>
        <li>
          <Chips type="md" isActive={exactRoute === "furnishing"} disabled>
            <Link href={"furnishing"}>Комплектация</Link>
          </Chips>
        </li>
        <li>
          <Chips type="md" isActive={exactRoute === "construction"} disabled>
            <Link href={"construction"}>Строительство</Link>
          </Chips>
        </li>
      </ul>
    </>
  );
};

export default TabsBar;
