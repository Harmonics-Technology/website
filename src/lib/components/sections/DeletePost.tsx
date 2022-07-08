import {
  Modal,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Box,
  HStack,
  Button,
} from '@chakra-ui/react';

type Props = {
  isOpen: boolean;
  onClose: any;
};

const DeletePost = ({ isOpen, onClose }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      isCentered
    >
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />

      <ModalContent
        py={5}
        borderRadius="0"
        w={['88%', '80%']}
        overflow="hidden"
        maxH="100vh"
        pos="fixed"
        mt="1rem"
        mb="1rem"
      >
        <ModalHeader textAlign="center">
          <>
            <Text fontSize="1.1rem" fontWeight="bold">
              Are you sure you want to delete this post?
            </Text>
            <Text color="red" fontSize=".8rem">
              Please note, action cannot be reversed
            </Text>
          </>
        </ModalHeader>

        <ModalBody>
          <Box maxH="77vh" overflowY="auto" px={5}>
            <HStack px=".8rem" spacing={4} w="full">
              <Button
                height="40px"
                minWidth="unset"
                border="1px solid"
                width="full"
                bgColor="black"
                _hover={{
                  color: 'black',
                  bgColor: 'white',
                  borderColor: 'black',
                }}
                onClick={onClose}
              >
                No
              </Button>
              <Button
                height="40px"
                minWidth="unset"
                width="full"
                border="1px solid"
                bgColor="brand.600"
                _hover={{
                  color: 'brand.600',
                  bgColor: 'white',
                  borderColor: 'brand.600',
                }}
              >
                Yes
              </Button>
            </HStack>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DeletePost;
