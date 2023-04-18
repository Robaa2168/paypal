import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Card,
  CardBody,
  ModalFooter,
} from "@chakra-ui/react";

function AddCurrencyModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);

  return (
    <>
      <Button
        onClick={onOpen}
        w={{ base: "100%", sm: "auto" }}
        m={{ base: "0 auto", sm: "0" }}
        p={{ base: "0 auto", sm: "auto" }}
        bgColor="white"
        variant="white"
        display={{ base: "block", sm: "inline-block" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-three-dots-vertical"
          viewBox="0 0 16 16"
        >
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
      </Button>

      <Modal onClose={onClose} size="lg" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <form>
            <ModalCloseButton />
            <ModalBody style={{ backgroundColor: "#f4f6f9" }}>
              <FormControl m="5">
                {/* <lable>Select Currency</lable> */}
                <FormLabel>Select Currency</FormLabel>
                <select class="form-select" aria-label="Default select example">
                  <option value="usd">USD</option>
                  <option value="euro">EURO</option>
                  <option value="yen">Yen</option>
                </select>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddCurrencyModal;
