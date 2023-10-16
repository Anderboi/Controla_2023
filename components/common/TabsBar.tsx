"use client";

import React, { Fragment } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Tab } from "@headlessui/react";

const stages = [
  {
    value: "preProject",
    label: "Предпроектная стадия",
  },
  {
    value: "concept",
    label: "Эскизная стадия",
  },
  {
    value: "schemas",
    label: "Рабочая стадия",
  },
  {
    value: "furnishing",
    label: "Комплектация",
  },
  {
    value: "construction",
    label: "Строительство",
  },
];

const TabsBar = () => {
  const route = useRouter();

  return (
    <>
      <div className="pb-6 sm:hidden">
        <select
          name="stages"
          id="stages"
          onChange={(i) => route.push(i.target.value)}
        >
          {stages.map((stage, index) => (
            <option key={index} value={stage.value}>
              {stage.label}
            </option>
          ))}
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
            text-[13px]
            sm:grid
            "
        >
          {stages.map((stage, index) => (
            <Tab key={index} as={Fragment}>
              {({ selected }) => (
                <Link
                  href={stage.value}
                  className={`w-full rounded-md px-4 py-2  ${
                    selected
                      ? "bg-accent-dark text-primary-text-light font-bold"
                      : "text-secondary-text-dark hover:bg-elevated-2-bg-dark"
                  }`}
                >
                  {stage.label}
                </Link>
              )}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </>
  );
};

export default TabsBar;
