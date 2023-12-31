import React, { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

const SideModal = ({
  description,
  isOpen,
  onChange,
  children,
  title,
}: ModalProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={onChange}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="
                fixed 
                inset-0 
                bg-primary-bg-dark/75
                "
            />
          </Transition.Child>

          <div
            className="
              fixed
              inset-0
              "
          >
            <div
              className="
                flex
                h-full
                items-center
                justify-end
                p-2
                text-center
                "
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="
                    relative
                    h-full
                    w-full
                    max-w-md

                    overflow-y-auto

                    rounded-xl
                    bg-secondary-bg-dark

                    text-left
                    shadow-xl
                    transition-all
                    no-scrollbar
                    "
                >
                  <Dialog.Title
                    as="h3"
                    className="
                      sticky
                      top-0

                      bg-secondary-bg-dark
                      p-6
                      text-2xl

                      font-bold
                      leading-6
                      text-primary-text-dark
                      "
                  >
                    <button
                      onClick={() => onChange(!isOpen)}
                      className="
                          absolute
                          right-[16px]
                          top-[16px]
                          inline-flex
                          h-[24px]
                          w-[24px]
                          appearance-none
                          items-center
                          justify-center
                          text-secondary-text-dark
                          hover:text-primary-text-dark
                          focus:outline-none
                          "
                    >
                      <IoMdClose size={24} />
                    </button>
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                  </Dialog.Title>
                  <Dialog.Description
                    className="
                      text-center
                      text-base
                      leading-normal
                      text-primary-text-dark
                      "
                  >
                    {description}
                  </Dialog.Description>
                  {/* //? Content */}
                  <div
                    className="
                      space-y-6
                      px-6
                      "
                  >
                    {children}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SideModal;
