import React, { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";


interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}

const ModalAlt = ({
  description,
  isOpen,
  onChange,
  children,
  title,
}: ModalProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20 " onClose={onChange}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-primary-bg-dark bg-opacity-75 " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
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
                    w-full 
                    max-w-md 
                    transform 
                    overflow-hidden 
                    bg-elevated-1-bg-dark
                    rounded-xl 
                    bg-white 
                    p-6 
                    text-left 
                    align-middle 
                    shadow-xl 
                    transition-all
                    "
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-primary-text-dark"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-secondary-text-dark">
                      {description}
                    </p>
                  </div>
                  <div className="pt-6">{children}</div>
                  <button
                    onClick={()=>{}}
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
                  {/* <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {}}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalAlt;
