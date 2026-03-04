import React, { useState } from 'react';
import {
  Box,
  Input,
  Button,
  Stack,
  VStack,
  Text,
  FormLabel,
  Image,
  useToast,
  Flex,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { useForm, FieldError, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PrimaryInput } from '../../components/Utils/PrimaryInput';
import {
  UserService,
  UserViewStandardResponse,
  InitiateResetModel,
} from '../../../../client';

const schema = yup.object().shape({
  email: yup.string().email().required(),
});
// interface IFormInput {
//   email: string;
// }
const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<InitiateResetModel>({
    resolver: yupResolver(schema),
    mode: 'all',
  });
  const [error, setError] = useState<any>('');
  const toast = useToast();
  const router = useRouter();
  const [showSuccessScreen, setSuccesScreen] = useState(false);

  const onSubmit = async (data: InitiateResetModel) => {
    console.log({ data });
    try {
      const response = (await UserService.initiateReset({
        requestBody: data,
      })) as UserViewStandardResponse;
      if (response.status === true) {
        setSuccesScreen(true);
        return;
      }
    } catch (err) {
      console.log({ error });
      setError('An error occured');
      return;
    }
  };

  return (
    <Flex
      w="100%"
      h="100vh"
      direction="column"
      mt={['-5rem', '-3rem', '-2rem']}
      alignItems="center !important"
      justifyContent="center !important"
    >
      {showSuccessScreen ? (
        <Box w="100%">
          <Box w="150px" mx="auto">
            <Image src="/Group 9.png" alt="" mb="2rem" />
          </Box>
          <VStack w="100%" spacing={6} alignItems="flex-start">
            <Flex
              w="50px"
              h="50px"
              borderRadius="50%"
              mx="auto"
              bg="#A03CAE"
              color="white"
              justifyContent="center"
              alignItems="center"
            >
              <CheckIcon fontSize="25px" />
            </Flex>
            <Text
              w="100%"
              textAlign="center"
              lineHeight={0.5}
              fontWeight={500}
              fontSize="20px"
              sx={{
                '::first-letter': {
                  textTransform: 'uppercase',
                },
              }}
            >
              a mail has been sent to your email.
            </Text>
          </VStack>
          <Flex mt="30px" w="100%" justifyContent="center">
            <Button
              color="#fff"
              w="150px"
              h="45px"
              bg="#A03CAE"
              borderRadius="8px"
              border="none"
              type="submit"
              _hover={{
                color: '#A03CAE',
                bg: '#fff',
                border: '1px solid #A03CAE',
              }}
              onClick={() => router.push('/blog/login.tsx')}
            >
              Login
            </Button>
          </Flex>
        </Box>
      ) : (
        <>
          <Text color="red">{error ? error : null}</Text>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <Stack
              w={['75%', '50%']}
              m="auto"
              alignItems="center"
              justifyContent="center"
              spacing={6}
            >
              <Image
                src="/Group 9.png"
                alt=""
                mb="2rem"
                boxSize={['50%', '45%', '35%']}
              />
              <PrimaryInput<InitiateResetModel>
                name="email"
                error={errors.email}
                defaultValue=""
                register={register}
                label="Email"
                placeholder="user@harmonicstechnology.com"
              />
              <Button
                color="#fff"
                w="100%"
                bg="#A03CAE"
                borderRadius="8px"
                border="none"
                type="submit"
                _hover={{
                  color: '#A03CAE',
                  bg: '#fff',
                  border: '1px solid #A03CAE',
                }}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </>
      )}
    </Flex>
  );
};

export default ForgotPassword;
