"use client";

import React from "react";
import EditIcon from "./icons/EditIcon";
import { Disclosure, Transition } from "@headlessui/react";
import ChevronRightIcon from "./icons/ChevronRightIcon";

interface ContentBlockProps {
  title: string;
  children: React.ReactNode;
}

const ContentBlock = ({ title, children }: ContentBlockProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <section className="transition ease-in-out delay-50">
          <Disclosure.Button className="flex justify-between pb-2 w-full">
            <h2
              className="
                text-start
                text-lg
                font-bold
                sm:text-xl
                "
            >
              {title}
            </h2>
            <div className="flex items-center justify-center gap-3 ">
              <EditIcon className=" cursor-pointer text-secondary-text-dark sm:hover:text-accent-dark" />
              <ChevronRightIcon
                type="down"
                className={`
                cursor-pointer 
                text-secondary-text-dark 
                sm:hover:text-accent-dark
                transition ease-in-out delay-50
                transform
                ${open && "rotate-180"}`}
              />
            </div>
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform opacity-0"
            enterTo="transform opacity-100"
            leave="transition duration-100 ease-out"
            leaveFrom="transform opacity-100"
            leaveTo="transform opacity-0"
          >
            <Disclosure.Panel>{children}</Disclosure.Panel>
          </Transition>
        </section>
      )}
    </Disclosure>
  );
};

export default ContentBlock;
