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
  Link,
} from '@chakra-ui/react';
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

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
      columns={[2, 5]}
      w="full"
      spacingY={5}
      display={['grid', 'grid']}
    >
      <GridItem colSpan={1}>
        <VStack align="flex-start" spacing={6}>
          <Text fontSize="1.1rem" color="white" fontWeight="bold">
            Company
          </Text>
          <VStack fontSize=".7rem" color="white" spacing={4} align="flex-start">
            <Link href="/">
              <Text>Home</Text>
            </Link>

            <Link href="/about">
              <Text>About us</Text>
            </Link>

            <Link href="/our-work">
              <Text>Projects</Text>
            </Link>
          </VStack>
        </VStack>
      </GridItem>
      <GridItem colSpan={1}>
        <VStack align="flex-start" spacing={6}>
          <Text fontSize="1.1rem" color="white" fontWeight="bold">
            Contact
          </Text>
          <VStack fontSize=".7rem" color="white" spacing={4} align="flex-start">
            <Link href="/contact-us">
              <Text>Work with us</Text>
            </Link>
            <Link href="/contact-us">
              <Text>Help &amp; support</Text>
            </Link>
          </VStack>
        </VStack>
      </GridItem>
      <GridItem colSpan={1}>
        <VStack align="flex-start" spacing={6}>
          <Text fontSize="1.1rem" color="white" fontWeight="bold">
            Legal
          </Text>
          <VStack fontSize=".7rem" color="white" spacing={4} align="flex-start">
            <Link href="#">
              <Text>Terms &amp; Conditions</Text>
            </Link>

            <Link href="#">
              <Text>Privacy Policy</Text>
            </Link>

            <Link href="#">
              <Text>Cookie Policy</Text>
            </Link>
          </VStack>
        </VStack>
      </GridItem>
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
      © 2022 Nigeria Harmonics Technology. All rights reserved
    </Text>
    <HStack
      spacing={[0, 5]}
      display={['grid', 'flex']}
      gridTemplateColumns="repeat(2, 1fr)"
      position={['absolute', 'unset']}
      top="170px"
      left="50%"
      gap={[5, 0]}
    >
      <Circle
        as="a"
        href="https://instagram.com/harmonicstechnology"
        size="32px"
        bg="brand.50"
        color="white"
      >
        <FaInstagram />
      </Circle>
      <Circle
        as="a"
        href="https://facebook.com/harmonicstechnology"
        size="32px"
        bg="brand.50"
        color="white"
      >
        <FaFacebook />
      </Circle>
      <Circle
        as="a"
        href="https://twitter.com/HarmonicsTech"
        size="32px"
        bg="brand.50"
        color="white"
      >
        <FaTwitter />
      </Circle>
      <Circle
        as="a"
        href="https://linkedin.com/harmonicstechnology"
        size="32px"
        bg="brand.50"
        color="white"
      >
        <FaLinkedin />
      </Circle>
    </HStack>
  </Flex>
);
const Footer = () => (
  <VStack h="fit-content" bgColor="brand.200" pos="relative">
    <FooterWidget />
    <Divider />
    <FooterLinks />
  </VStack>
);
export default Footer;
