"use client";

import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Trash2 } from "lucide-react";

import { useDeletePost } from "@/hooks/post.hook";

interface IProps {
  postId: string;
}

export default function DeleteModal({ postId }: IProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { mutate: deletePost, isPending } = useDeletePost();

  const handleDelete = (onClose: () => void) => {
    deletePost(postId);
    onClose();
  };

  return (
    <>
      <Button isIconOnly onPress={onOpen}>
        <Trash2 className="hover:text-rose-500" />
      </Button>
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Are you sure you want to delete this item?
              </ModalHeader>
              <ModalBody>
                <p>
                  This action cannot be undone, and you will lose all related
                  data.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose}>Cancel</Button>
                <Button
                  color="danger"
                  isLoading={isPending}
                  onClick={() => handleDelete(onClose)}
                >
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
