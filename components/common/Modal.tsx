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
          bg-secondary-bg-dark/70
          backdrop-blur-md
          data-[state=open]:animate-centerOverlayShow
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
          bg-elevated-1-bg-dark
          p-6
          shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]
          no-scrollbar
          focus:outline-none
          data-[state=open]:animate-centerContentShow
          md:h-auto
          md:max-h-[65vh]
          md:w-[90vw]
          md:max-w-[450px]
          "
        >
          <Dialog.Title
            className="
            sticky
            m-0
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
            text-sm
            leading-normal
            text-secondary-text-dark
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
              <IoMdClose size={24} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
