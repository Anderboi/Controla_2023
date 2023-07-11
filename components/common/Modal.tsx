import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}

const Modal = ({
  description,
  isOpen,
  onChange,
  children,
  title,
}: ModalProps) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="
          bg-secondary-bg-dark/80
          backdrop-blur-sm
          fixed
          inset-0
          z-20
          "
        />
        <Dialog.Content
          className="
          fixed
          top-[50%]
          left-[50%]
          h-[98%]
          w-[96%]
           //TODO: add on lower part of modal
          md:h-auto
          md:max-h-[65vh]
          md:w-[90vw]
          md:max-w-[450px]
          translate-x-[-50%]
          translate-y-[-50%]
          overflow-clip
          rounded-lg
          bg-elevated-2-bg-dark
          p-6
          focus:outline-none
          z-50
          "
        >
          <Dialog.Title
            className="
            text-2xl
            font-bold
            mb-4
            "
          >
            {title}
          </Dialog.Title>
          <Dialog.Description
            className="
            mb-5
            text-base
            leading-normal
            text-center
            text-primary-text-dark
            "
          >
            {description}
          </Dialog.Description>
          <div className=''>
            {children}
          </div>
          <Dialog.Close asChild>
            <button
              className="
              text-secondary-text-dark 
              hover:text-primary-text-dark
              absolute
              top-[10px]
              right-[10px]
              inline-flex
              h-[24px]
              w-[24px]
              appearance-none
              items-center
              justify-center
              focus:outline-none
              "
            >
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
