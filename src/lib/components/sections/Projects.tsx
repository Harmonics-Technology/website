import {
  Box,
  Heading,
  VStack,
  Text,
  Flex,
  Button,
  Image,
  Link,
} from '@chakra-ui/react';

const Projects = () => (
  <Box w="100%" mt="40px">
    <Box w="90%" margin="0px auto 20px">
      <Flex justify="space-between" w="full" align="center" mb="20px">
        <Heading
          fontSize="24px"
          fontFamily="brSemi"
          color="brand.200"
          sx={{
            '@media(min-width: 700px)': {
              fontSize: '2rem',
            },
          }}
          lineHeight={1.5}
        >
          Past Projects
        </Heading>
      </Flex>

      <Flex
        width="full"
        height="fit-content"
        my="2rem"
        align="center"
        position="relative"
        direction="column-reverse"
        sx={{
          '@media(min-width: 700px)': {
            flexDirection: 'row',
          },
        }}
      >
        <VStack alignItems="flex-start" height="full" width="full">
          <Box w="full" height="fit-content" borderRadius="10px">
            <Box
              w="full"
              height="305px"
              bg="brand.grey"
              bgColor="brand.100"
              sx={{
                '@media(min-width: 700px)': {
                  height: '400px',
                },
              }}
            >
              <Image
                src="img4.jpg"
                alt="Placeholder"
                objectFit="cover"
                height="full"
                w="full"
              />
            </Box>
          </Box>
        </VStack>
        <Box
          width="full"
          height="full"
          mb="25px"
          sx={{
            '@media(min-width: 700px)': {
              paddingLeft: '1.5rem',
            },
          }}
        >
          <Box>
            <Heading fontSize="2.5rem" fontFamily="brRegular" color="brand.200">
              Property Mataaz
            </Heading>
            <Text fontSize=".9rem" fontWeight="regular" w="95%" my="2rem">
              Property Mataaz is an Estate Management agency located in Lagos,
              Nigeria whose main drive is to provide solutions to property sale,
              rent, loans and other related estate management services
            </Text>

            <Link
              href="https://propertymataaz.com"
              target="_blank"
              textDecoration="none !important"
            >
              <Button variant="outline">Read More</Button>
            </Link>
          </Box>
        </Box>
      </Flex>
      <Flex
        width="full"
        height="fit-content"
        my="2rem"
        align="center"
        position="relative"
        direction="column"
        sx={{
          '@media(min-width: 700px)': {
            flexDirection: 'row',
          },
        }}
      >
        <VStack alignItems="flex-start" spacing="10" width="full" height="full">
          <Box
            mb="25px"
            sx={{
              '@media(min-width: 700px)': {
                paddingRight: '1.5rem',
              },
            }}
          >
            <Heading fontSize="2.5rem" fontFamily="brRegular" color="brand.200">
              Liquede
            </Heading>
            <Text fontSize=".9rem" fontWeight="regular" w="95%" my="2rem">
              Liquede is a product of Liquede Limited, a subsidiary of Oxygen
              Holdings. Banking services on Liquede are provided by Bank
              Limited, which is registered with the Central Bank of Nigeria.
              Payments on Liquede are made via Interswitch; a PCI DSS certified
              payment platform with bank-level security to ensure your
              transactions and financial information are kept safe at all times.
            </Text>

            <Link href="https://liquede.com" textDecoration="none !important">
              <Button variant="outline">Read More</Button>
            </Link>
          </Box>
        </VStack>
        <VStack alignItems="flex-start" height="full" width="full">
          <Box w="full" height="fit-content" borderRadius="10px">
            <Box
              w="full"
              height="305px"
              bg="brand.grey"
              bgColor="brand.100"
              sx={{
                '@media(min-width: 700px)': {
                  height: '400px',
                },
              }}
            >
              <Image
                src="/img3.jpg"
                alt="Placeholder"
                objectFit="cover"
                objectPosition="left"
                height="full"
                w="full"
              />
            </Box>
          </Box>
        </VStack>
      </Flex>
    </Box>
  </Box>
);

export default Projects;
