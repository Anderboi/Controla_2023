"use client";

import React, { Fragment } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import PreProject from '@/app/projects/[id]/(tabs)/preProject/page';

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

const TabsBar =  () => {

  return (
    <Tabs defaultValue="preProject" className="w-[400px]">
      <TabsList>
        {stages.map(({ label, value }, index) => (
          <TabsTrigger key={index} value={value}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="preProject">
        
      </TabsContent>
      <TabsContent value="concept">Change your password here.</TabsContent>
    </Tabs>
    // <>
    //   <div className="pb-6 sm:hidden">
    //     <select
    //       name="stages"
    //       id="stages"
    //       onChange={(i) => route.push(i.target.value)}
    //     >
    //       {stages.map((stage, index) => (
    //         <option key={index} value={stage.value}>
    //           {stage.label}
    //         </option>
    //       ))}
    //     </select>
    //   </div>
    //   <Tab.Group defaultIndex={0}>
    //     <Tab.List
    //       className="
    //         mb-6
    //         hidden
    //         grid-cols-5
    //         items-center
    //         rounded-lg
    //         dark:bg-elevated-1-bg-dark
    //         p-1
    //         text-center
    //         text-[14px]
    //         sm:grid
    //         "
    //     >
    //       {stages.map((stage, index) => (
    //         <Tab key={index} as={Fragment}>
    //           {({ selected }) => (
    //             <Link
    //               href={stage.value}
    //               className={`w-full rounded-md px-4 py-2  ${
    //                 selected
    //                   ? "bg-accent-dark text-primary-text-light font-bold"
    //                   : "text-secondary-text-dark hover:bg-elevated-2-bg-dark"
    //               }`}
    //             >
    //               {stage.label}
    //             </Link>
    //           )}
    //         </Tab>
    //       ))}
    //     </Tab.List>
    //   </Tab.Group>
    // </>
  );
};

export default TabsBar;
