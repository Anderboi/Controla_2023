import React, { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  button?: React.ReactNode;
}

const Modal = ({
  description,
  isOpen,
  onChange,
  children,
  title,
  button,
}: ModalProps) => {

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={onChange}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-primary-bg/75" />
          </Transition.Child>

          <div className="fixed inset-0">
            <div className="flex h-full items-center justify-center p-4 text-center">
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

                    h-[80dvh]
                    w-full

                    max-w-md
                    overflow-y-auto

                    rounded-xl
                    bg-elevated-1-bg-dark
                    text-left
                    align-middle
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

                    z-10
                    bg-elevated-1-bg-dark

                    px-6
                    pb-2

                    pt-6
                    text-lg
                    font-medium
                    leading-6
                    text-primary-text-dark
                    "
                  >
                    <>
                      <button
                        onClick={() => onChange(!isOpen)}
                        className="
                          absolute
                          right-[10px]
                          top-[10px]
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
                    </>
                    {title}
                  </Dialog.Title>
                  <div className="mt-2 px-6">
                    <p className="text-sm text-secondary-text-dark">
                      {description}
                    </p>
                  </div>
                  <div className="h-fit px-6 pt-6">{children}</div>
                  <div className="sticky bottom-0 bg-elevated-1-bg-dark px-6 pb-6">
                    {button}
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

export default Modal;
