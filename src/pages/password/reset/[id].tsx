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
import { PrimaryInput } from '../../../lib/components/Utils/PrimaryInput';
import {
  UserService,
  UserViewStandardResponse,
  PasswordReset,
} from '../../../../client';
import { BiHide, BiShowAlt } from 'react-icons/bi';
import { GetServerSidePropsContext } from 'next';

const schema = yup.object().shape({
  code: yup.string().required(),
  newPassword: yup.string().required(),
});
// interface IFormInput {
//   email: string;
// }
const CompleteReset = ({ token }: { token: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PasswordReset>({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: {
      code: token,
    },
  });
  const [error, setError] = useState<any>('');
  const toast = useToast();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(true);
  const [showSuccessScreen, setSuccesScreen] = useState(false);

  const changePasswordField = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: PasswordReset) => {
    console.log({ data });
    try {
      const response = (await UserService.completeReset({
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
              password reset completed. You can now login with your new
              password.
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
              <PrimaryInput<PasswordReset>
                name="newPassword"
                error={errors.newPassword}
                defaultValue=""
                register={register}
                label="password"
                placeholder="*****"
                icon={showPassword ? <BiShowAlt /> : <BiHide />}
                changePasswordType={changePasswordField}
                type={showPassword ? 'password' : 'text'}
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

export default CompleteReset;

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  const { id } = ctx.query;
  return {
    props: {
      token: id,
    },
  };
};
