import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Image,
  HStack,
  Circle,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import PagesHero from '../../components/sections/PagesHero';

function ContactUs() {
  return (
    <>
      <PagesHero
        title="Need help? Reach out to us"
        subtitle="Reach out to us via our social media handles or using our contact form to submit a complaint and one of our customer representative will get back to you!"
      />
      <Box textAlign="center" my="3rem">
        <Heading
          fontSize={['1.2rem', '2.5rem']}
          fontFamily="brSemi"
          color="brand.200"
        >
          Get in touch !
        </Heading>
        <Text
          fontSize=".9rem"
          fontWeight="regular"
          w={['90%', '50%']}
          mx="auto"
        >
          Do you have a question, or would like to make enquiry on our products
          or other related services, kindly reach out to us. we are just a
          distance away
        </Text>
      </Box>
      <Flex
        bgColor="#F9F9F9"
        h="auto"
        borderRadius="10px"
        w="90%"
        mx="auto"
        mb="3rem"
        flexDirection={['column', 'row']}
      >
        <Box
          bg="brand.100"
          py="2rem"
          w={['full', '40%']}
          borderLeftRadius="10px"
          borderRightRadius={['10px', '0']}
          color="white"
          pl="1rem"
        >
          <Box mb="2.5rem">
            <Text fontSize={['1.2rem', '2rem']} fontWeight="700">
              Contact Information
            </Text>
            <Text fontSize="14px" w="80%">
              Need a qoute, fill the form and our team will get back to you
              within 24hours
            </Text>
          </Box>
          <VStack spacing={8} align="flex-start">
            <Box>
              <Text fontSize="1rem" fontWeight="600">
                Phone
              </Text>
              <Text fontSize="1rem">++234 818 004 1801, +234 802 627 6487</Text>
            </Box>
            <Box>
              <Text fontSize="1rem" fontWeight="600">
                Email
              </Text>
              <Text fontSize="1rem">info@harmonicstechnology.com</Text>
            </Box>
            <Box>
              <Text fontSize="1rem" fontWeight="600">
                Address
              </Text>
              <Text fontSize="1rem">
                34 Peter Agah street, Oke afa, Mass burial road, Isolo Lagos,
                Nigeria.
              </Text>
            </Box>
            <Image
              src="/laptop.png"
              width={['95%', 'auto']}
              height="auto"
              mt="3rem !important"
            />
          </VStack>
          <HStack spacing={0} mt="1rem">
            <Circle
              as="a"
              href="https://instagram.com/harmonicstechnology"
              size="32px"
              bg="brand.100"
              color="white"
            >
              <FaInstagram />
            </Circle>
            <Circle
              as="a"
              href="https://facebook.com/harmonicstechnology"
              size="32px"
              bg="brand.100"
              color="white"
            >
              <FaFacebook />
            </Circle>
            <Circle
              as="a"
              href="https://twitter.com/HarmonicsTech"
              size="32px"
              bg="brand.100"
              color="white"
            >
              <FaTwitter />
            </Circle>
            <Circle
              as="a"
              href="https://linkedin.com/harmonicstechnology"
              size="32px"
              bg="brand.100"
              color="white"
            >
              <FaLinkedin />
            </Circle>
          </HStack>
        </Box>
        <Box w={['full', '60%']} px="2rem" py="3rem">
          <SimpleGrid columns={2} spacing={8}>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel color="brand.200" fontSize=".9rem">
                  Name
                </FormLabel>
                <Input variant="filled" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={[2, 1]}>
              <FormControl>
                <FormLabel color="brand.200" fontSize=".9rem">
                  Email Address
                </FormLabel>
                <Input variant="filled" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={[2, 1]}>
              <FormControl>
                <FormLabel color="brand.200" fontSize=".9rem">
                  Phone Number
                </FormLabel>
                <Input variant="filled" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel color="brand.200" fontSize=".9rem">
                  What Services Do You Need?
                </FormLabel>
                <Select
                  placeholder="Click here to select"
                  bgColor="white"
                  h="3rem"
                  borderColor="transparent"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel color="brand.200" fontSize=".9rem">
                  Message
                </FormLabel>
                <Textarea
                  placeholder="Write a message"
                  resize="none"
                  bgColor="white"
                  h="200px"
                  borderColor="transparent"
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Button
                type="submit"
                bgColor="brand.100"
                borderRadius="10px"
                color="white"
                h="3rem"
                w="full"
                fontSize=".9rem"
                disabled
              >
                Send Message
              </Button>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
}

export default ContactUs;
