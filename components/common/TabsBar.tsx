"use client";

import React, { Fragment } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Tab } from "@headlessui/react";

// function classNames(...classes: any) {
//   return classes.filter(Boolean).join(" ");
// }
const TabsBar = () => {
  const route = useRouter();
  // const path = usePathname();
  // const exactRoute = path.split("/")[path.split("/").length - 1];

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
          <option value="schemas">Рабочая стадия</option>
          <option value="furnishing">Комплектация</option>
          <option value="construction">Строительство</option>
        </select>
      </div>
      <Tab.Group defaultIndex={0}>
        <Tab.List
          className="
            mb-6 
            hidden
            grid-cols-5
            items-center
            rounded-lg
            bg-elevated-1-bg-dark
            p-1
            text-center
            text-sm
            sm:grid
            "
        >
          <Tab as={Fragment}>
            {({ selected }) => (
              <Link
                href={"preProject"}
                className={`w-full rounded-md px-4 py-2  ${
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
                className={`h-full rounded-md px-4 py-2  ${
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
                href={"schemas"}
                className={`h-full rounded-md px-4 py-2 ${
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
                className={`h-full rounded-md px-4 py-2 ${
                  selected
                    ? "bg-accent-dark text-primary-text-light"
                    : "bg-white-dark text-secondary-text-dark hover:bg-elevated-2-bg-dark"
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
                className={`h-full place-self-center rounded-md px-4 py-2  ${
                  selected
                    ? "bg-accent-dark text-primary-text-light"
                    : "bg-white-dark text-secondary-text-dark hover:bg-elevated-2-bg-dark"
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
