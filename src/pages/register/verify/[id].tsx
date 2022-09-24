import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BsShieldFillCheck } from 'react-icons/bs';
import { UserService, UserViewStandardResponse } from '../../../../client';

const VerifyToken = ({ token }: { token: string }) => {
  console.log({ token });
  const router = useRouter();
  const [verified, setVerified] = useState<any>();

  const VerifyUser = async () => {
    try {
      const response = (await UserService.verify({
        token: token,
      })) as UserViewStandardResponse;
      if (response.status === true) {
        setVerified(response.data);
        return;
      }
    } catch (error) {}
  };
  useEffect(() => {
    VerifyUser();
  }, []);
  console.log({ verified });

  return (
    <Flex w="100%" justify="center" align="center" height="100vh">
      {verified !== null && verified !== undefined ? (
        <VStack spacing="1rem">
          <HStack>
            <Icon as={BsShieldFillCheck} w={12} h={12} />
            <Text fontSize="2rem">Account Verified</Text>
          </HStack>
          <Box>
            <Button
              textTransform="capitalize"
              w={['100%', 'unset']}
              onClick={() => router.push('/blogs/login')}
              _hover={{
                bg: 'transparent',
                color: 'brand.100',
                border: '2px solid #A03CAE',
              }}
              _focus={{
                outline: 'none',
              }}
            >
              Continue to Login
            </Button>
          </Box>
        </VStack>
      ) : (
        <Text>Verifying...</Text>
      )}
    </Flex>
  );
};

export default VerifyToken;

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  const { id } = ctx.query;
  return {
    props: {
      token: id,
    },
  };
};
