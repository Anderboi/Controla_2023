"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";

interface Props {
  children: React.ReactNode;
  title: string;
  amount: string;
}

const Accordion = ({ amount, children, title }: Props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div>
          <Disclosure.Button
            className={`
              flex
              w-full
              justify-between
              bg-elevated-1-bg-dark
              p-4
              transition-all
              ${open ? "rounded-t-lg" : "rounded-lg"}`}
          >
            <span className="text-left">{title}</span>
            <span className="w-2/4 text-right text-secondary-text-dark">
              {amount}
            </span>
          </Disclosure.Button>
          <Disclosure.Panel
            className="
              flex 
              flex-col
              gap-y-2
              rounded-b-lg

              bg-elevated-1-bg-dark/50
              p-4
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
