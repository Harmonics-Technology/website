import React, { useState } from 'react';
import {
  Box,
  Input,
  Link,
  Button,
  Stack,
  VStack,
  Text,
  FormLabel,
  Image,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { useForm,SubmitHandler ,FieldError,UseFormRegister, Path} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {PrimaryInput} from './PrimaryInput'

interface FormInputProps {
    email: string;
    password: any;
    error: FieldError | undefined;
    required?: boolean;
  }
  

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormInputProps>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(true);
  const changePasswordField = () => {
    setShowPassword(!showPassword);
  };

  const handleAfterLogin = () => {
    if (router.query && router.query.from) {
      router.push(router.query.from as unknown as string);
    } else {
      window.location.href = '/';
    }
  };

  const onSubmit = () => {
    handleAfterLogin();
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
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <Stack
            w={['75%', '50%']}
            m="auto"
            alignItems="center"
            justifyContent="center"
            spacing={6}
          >
            <Image src="/Group 9.png" alt="" boxSize={['50%', '45%', '35%']} />
            <PrimaryInput
                label="Email"
                name="email"
                error={errors.email}
                defaultValue=""
                register={register}
              />
              <PrimaryInput
                label="Password"
                name="password"
                defaultValue=""
                register={register}
                changePasswordType={changePasswordField}
                type={showPassword ? 'password' : 'text'}
                iconClass={showPassword ? 'fa-eye' : 'fa-eye-slash'}
                 error={undefined}             
                />
    
            <Button
              color="#fff"
              w="100%"
              bg="#A03CAE"
              borderRadius="8px"
              border="none"
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
