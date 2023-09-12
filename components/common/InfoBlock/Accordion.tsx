"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";

interface Props {
  children: React.ReactNode;
  title: string;
}

const Accordion = ({ children, title }: Props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div>
          <Disclosure.Button
            className={`
              bg-elevated-1-bg-dark
              p-4
              w-full
              flex
              justify-between
              transition-all
              ${open ? "rounded-tl-lg rounded-tr-lg" : "rounded-lg"}`}
          >
            <span className="text-left">{title}</span>
            <span className="text-right w-2/4 text-secondary-text-dark">00 / 02</span>
          </Disclosure.Button>
          <Disclosure.Panel
            className="
              bg-elevated-1-bg-dark/50 
              p-4
              rounded-bl-lg
              rounded-br-lg

              flex
              flex-col
              gap-y-2
              "
          >
            {children}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default Accordion;
