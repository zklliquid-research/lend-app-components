import { useDisclosure } from "@chakra-ui/react";

const useDrawer = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
};

export default useDrawer;
