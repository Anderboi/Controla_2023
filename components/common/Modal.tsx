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
          fixed
          inset-0
          z-20
          bg-secondary-bg-light/10
          backdrop-blur-md
          "
        />
        <Dialog.Content
          className="
          fixed 
          left-[50%] 
          top-[50%] 
          z-50 
          h-[98%] 
          w-[96%]
          translate-x-[-50%]
          translate-y-[-50%]
          overflow-y-auto
          text-clip
          rounded-lg
          bg-secondary-bg-dark
          p-6
          focus:outline-none
          md:h-auto
          md:max-h-[65vh]
          md:w-[90vw]
          md:max-w-[450px]
          "
        >
          <Dialog.Title
            className="
            mb-4
            text-center
            text-2xl
            font-bold
            "
          >
            {title}
          </Dialog.Title>
          <Dialog.Description
            className="
            mb-5
            text-center
            text-base
            leading-normal
            text-primary-text-dark
            "
          >
            {description}
          </Dialog.Description>
          <div className="">{children}</div>
          <Dialog.Close asChild>
            <button
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
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
