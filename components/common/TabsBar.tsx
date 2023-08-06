"use client";

import React, { Fragment } from "react";
import Chips from "./inputs/Chips";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Tab } from "@headlessui/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
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
      <Tab.Group defaultIndex={0}>
        <Tab.List
          className="
            hidden 
            sm:grid
            grid-cols-5
            text-center
            rounded-lg
            bg-elevated-1-bg-dark
            p-1
            text-sm
            items-center
            mb-6
            "
        >
          <Tab as={Fragment}>
            {({ selected }) => (
              <Link
                href={"preProject"}
                className={`rounded-md px-4 py-2 w-full ${
                  selected
                    ? "bg-accent-dark text-primary-text-light"
                    : "bg-white text-black text-secondary-text-dark hover:bg-elevated-2-bg-dark"
                }`}
              >
                Предпроектная стадия
              </Link>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <Link
                href={"concept"}
                className={`rounded-md px-4 py-2 h-full  ${
                  selected
                    ? "bg-accent-dark text-primary-text-light"
                    : "bg-white text-black text-secondary-text-dark hover:bg-elevated-2-bg-dark"
                }`}
              >
                Эскизная стадия
              </Link>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <Link
                href={"working"}
                className={`rounded-md px-4 py-2 h-full ${
                  selected
                    ? "bg-accent-dark text-primary-text-light"
                    : "bg-white text-black text-secondary-text-dark hover:bg-elevated-2-bg-dark"
                }`}
              >
                Рабочая стадия
              </Link>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <Link
                href={"furnishing"}
                className={`rounded-md px-4 py-2 h-full ${
                  selected
                    ? "bg-accent-dark text-primary-text-light"
                    : "bg-white text-black text-secondary-text-dark hover:bg-elevated-2-bg-dark"
                }`}
              >
                Комплектация
              </Link>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <Link
                href={"construction"}
                className={`rounded-md px-4 py-2 h-full ${
                  selected
                    ? "bg-accent-dark text-primary-text-light"
                    : "bg-white text-black text-secondary-text-dark hover:bg-elevated-2-bg-dark"
                }`}
              >
                Строительство
              </Link>
            )}
          </Tab>
        </Tab.List>
      </Tab.Group>
      {/* <ul
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
      </ul> */}
    </>
  );
};

export default TabsBar;
