import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
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
  className,
}: ModalProps) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="
          fixed
          inset-0
          z-10
          animate-sideDialogOverlay
          bg-primary-bg-dark/70
          backdrop-blur-md
          "
        />
        <Dialog.Content
          className="
          //h-full
          fixed
          inset-y-0
          right-0
          z-50
          w-[90%]
          animate-sideDialogContent
          overflow-y-auto
          text-clip
          
          p-2
          transition-all
          md:w-[90vw]
          md:max-w-[450px]
          "
        >
          <div className="h-full rounded-lg bg-secondary-bg-dark p-6
          ">
            <Dialog.Title
              className="
                mb-4
                text-start
                text-2xl
                font-bold
                "
            >
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
            <>{children}</>
            <Dialog.Close asChild>
              <button
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
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default SideModal;
