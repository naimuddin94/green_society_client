import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import { ReactNode } from "react";

interface IProps {
  isOpen: boolean; // Get isOpen prop from parent
  onOpenChange: (open: boolean) => void; // Get onOpenChange prop from parent
  title: string;
  children: ReactNode;
}

export default function GSModal({
  isOpen,
  onOpenChange,
  title,
  children,
}: IProps) {
  return (
    <Modal
      backdrop="blur"
      className="py-5"
      isOpen={isOpen}
      size="3xl"
      onOpenChange={onOpenChange}
    >
      <ModalContent className="max-h-[100vh] overflow-y-auto scrollbar-hide">
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>{children}</ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
