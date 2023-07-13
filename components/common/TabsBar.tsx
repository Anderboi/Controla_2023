"use client";

import React from "react";
import Chips from "./inputs/Chips";
import { usePathname, useRouter } from "next/navigation";

const TabsBar = () => {
  const route = useRouter();
  const path = usePathname();
  const exactRoute = path.split("/")[path.split("/").length - 1];

  return (
    <ul
      className="
          w-full
          min-h-[64px]
          h-fit
          flex
          gap-3
          pb-6
          items-center
          justify-start
          overflow-x-scroll
          no-scrollbar
          scroll-smooth
          scrolling-touch
          "
    >
      <li>
        <Chips
          type="md"
          onClick={() => {
            route.push("preProject");
          }}
          isActive={exactRoute === "preProject"}
        >
          Предпроектная стадия
        </Chips>
      </li>
      <li>
        <Chips
          type="md"
          onClick={() => {
            route.push("concept");
          }}
          isActive={exactRoute === "concept"}
        >
          Эскизная стадия
        </Chips>
      </li>
      <li>
        <Chips
          type="md"
          onClick={() => {
            route.push("working");
          }}
          isActive={exactRoute === "working"}
        >
          Рабочая стадия
        </Chips>
      </li>
      <li>
        <Chips
          type="md"
          onClick={() => {
            route.push("furnishing");
          }}
          isActive={exactRoute === "furnishing"}
        >
          Комплектация
        </Chips>
      </li>
      <li>
        <Chips
          type="md"
          onClick={() => {
            route.push("construction");
          }}
          isActive={exactRoute === "construction"}
        >
          Строительство
        </Chips>
      </li>
    </ul>
  );
};

export default TabsBar;
