import React, { useState } from 'react';
import {
  Box,
  Link,
  Button,
  Stack,
  Text,
  Image,
  useToast,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PrimaryInput } from '../../components/Utils/PrimaryInput';
import { BiHide, BiShowAlt } from 'react-icons/bi';
import Cookies from 'js-cookie';
import {
  LoginModel,
  OpenAPI,
  UserService,
  UserViewStandardResponse,
} from '../../../../client';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginModel>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(true);
  const [error, setError] = useState<any>('');
  const toast = useToast();
  const changePasswordField = () => {
    setShowPassword(!showPassword);
  };

  const handleAfterLogin = () => {
    if (router.query && router.query.from) {
      router.push(router.query.from as unknown as string);
    } else {
      window.location.href = '/blogs/dashboard';
    }
  };

  const onSubmit = async (data: LoginModel) => {
    try {
      const response = (await UserService.loginUser({
        requestBody: data,
      })) as UserViewStandardResponse;
      if (response.status === true) {
        console.log({ response });
        OpenAPI.TOKEN = response?.data?.token as string;
        Cookies.set('token', response?.data?.token as string);
        Cookies.set('user', JSON.stringify(response?.data));
        Cookies.set('userIn', 'true');
        toast({
          position: 'top-right',
          render: () => (
            <Box color="white" p={3} bg="brand.100">
              Login Successful
            </Box>
          ),
        });

        handleAfterLogin();
        return;
      }
      toast({
        position: 'top-right',
        render: () => (
          <Box color="white" p={3} bg="red.500">
            {response.message}
          </Box>
        ),
      });
      return;
    } catch (error) {
      console.log({ error });
      setError('An error occured');
    }
  };

  return (
    <>
      <Box
        w="100%"
        h={['100vh', '100vh']}
        mt={['-5rem', '-3rem', '-2rem']}
        display="flex"
        alignItems="center !important"
        justifyContent="center !important"
      >
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
            <PrimaryInput<LoginModel>
              name="email"
              error={errors.email}
              defaultValue=""
              register={register}
              label="Email"
              placeholder="user@harmonicstechnology.com"
            />
            <PrimaryInput<LoginModel>
              name="password"
              defaultValue=""
              register={register}
              changePasswordType={changePasswordField}
              type={showPassword ? 'password' : 'text'}
              error={errors.password}
              icon={showPassword ? <BiShowAlt /> : <BiHide />}
              label="password"
              placeholder="********"
            />

            <Button
              color="#fff"
              w="100%"
              bg="#A03CAE"
              borderRadius="8px"
              border="none"
              type="submit"
              isLoading={isSubmitting}
              _hover={{
                color: '#A03CAE',
                bg: '#fff',
                border: '1px solid #A03CAE',
              }}
            >
              Login
            </Button>
            <Stack alignItems="flex-end" w="full">
              <Link href="/blogs/forgot-password">
                <Text as="span" color="#000" fontWeight="600">
                  Forgot password
                </Text>
              </Link>
            </Stack>
          </Stack>
        </form>
      </Box>
    </>
  );
};

export default Login;
