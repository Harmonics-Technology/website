/* eslint-disable react/no-children-prop */
import {
  Flex,
  GridItem,
  SimpleGrid,
  Text,
  VStack,
  Circle,
  HStack,
  Divider,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

export const FooterMenu = () => (
  <GridItem colSpan={1}>
    <VStack align="flex-start" spacing={6}>
      <Text fontSize="1.1rem" color="white" fontWeight="bold">
        Company
      </Text>
      <VStack fontSize=".7rem" color="white" spacing={4} align="flex-start">
        <Text>Home</Text>
        <Text>About us</Text>
        <Text>Studios</Text>
      </VStack>
    </VStack>
  </GridItem>
);
export const FooterImage = () => (
  <GridItem colSpan={2}>
    <InputGroup>
      <Input
        placeholder="Subscribe to our news letter"
        bgColor="transparent"
        border="1px solid white !important"
        borderRadius="0"
        height="3rem"
        color="white"
        m="auto 0"
        _placeholder={{
          color: 'white',
        }}
      />
      <InputRightElement h="full" children={<FaArrowRight color="white" />} />
    </InputGroup>
  </GridItem>
);

export const FooterWidget = () => (
  <Flex
    w="100%"
    bg="white"
    px={['1rem', 20]}
    pt="3rem"
    pb="1rem"
    bgColor="brand.200"
  >
    <SimpleGrid
      columns={5}
      w="full"
      spacingY={5}
      display={['flex', 'grid']}
      flexDirection={['column-reverse']}
    >
      <FooterMenu />
      <FooterMenu />
      <FooterMenu />
      <FooterImage />
    </SimpleGrid>
  </Flex>
);

export const FooterLinks = () => (
  <Flex
    height={['auto', '3.4rem']}
    w="full"
    justify="space-between"
    px={['1rem', 40]}
    align="center"
    flexDirection={['column', 'row']}
    pb={['1rem', 'unset']}
  >
    <Text
      fontSize=".7rem"
      color="white"
      fontWeight="medium"
      mb={['.5rem', 'unset']}
    >
      © 2021 Nigeria Harmonicdev. All rights reserved
    </Text>
    <HStack spacing={5}>
      <Circle size="32px" bg="brand.50" color="white">
        <FaInstagram />
      </Circle>
      <Circle size="32px" bg="brand.50" color="white">
        <FaFacebook />
      </Circle>
      <Circle size="32px" bg="brand.50" color="white">
        <FaTwitter />
      </Circle>
      <Circle size="32px" bg="brand.50" color="white">
        <FaYoutube />
      </Circle>
    </HStack>
  </Flex>
);
const Footer = () => (
  <VStack h="fit-content" bgColor="brand.200">
    <FooterWidget />
    <Divider />
    <FooterLinks />
  </VStack>
);
export default Footer;
