import React, { useState } from 'react';
import {
  Box,
  Button,
  Stack,
  Link,
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
import {
  RegisterModel,
  UserService,
  UserViewStandardResponse,
} from '../../../../client';

const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [error, setError] = useState<any>('');
  const router = useRouter();
  const toast = useToast();
  const changePasswordField = () => {
    setShowPassword(!showPassword);
  };
  const schema = yup.object().shape({
    email: yup.string().email().required('required'),
    firstName: yup.string().required('required'),
    lastName: yup.string().required('required'),
    password: yup.string().required('required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterModel>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = async (data: RegisterModel) => {
    console.log(data);
    try {
      const response = (await UserService.create({
        requestBody: data,
      })) as UserViewStandardResponse;
      
      console.log({ response });
      if (response.status === true) {
        toast({
          position: 'top-right',
          render: () => (
            <Box color="white" p={3} bg="brand.100">
              Account created successfully, check email for verification
              information
            </Box>
          ),
        });
        router.push('/login');
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
        h="100vh"
        display="flex"
        mt={['-5rem', '-3rem', '-2rem']}
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
            <PrimaryInput<RegisterModel>
              name="firstName"
              error={errors.firstName}
              defaultValue=""
              register={register}
              label="First name"
              placeholder="Adekunle"
            />
            <PrimaryInput<RegisterModel>
              name="lastName"
              error={errors.lastName}
              defaultValue=""
              register={register}
              label="Last name"
              placeholder="Watawi"
            />
            <PrimaryInput<RegisterModel>
              name="email"
              error={errors.email}
              defaultValue=""
              register={register}
              label="Email"
              placeholder="user@harmonicstechnology.com"
            />
            <PrimaryInput<RegisterModel>
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
            <PrimaryInput<RegisterModel>
              name="confirmPassword"
              defaultValue=""
              register={register}
              changePasswordType={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              type={showConfirmPassword ? 'password' : 'text'}
              error={errors.confirmPassword}
              icon={showConfirmPassword ? <BiShowAlt /> : <BiHide />}
              label="Confirm password"
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
              Sign up
            </Button>
            <Stack alignItems="flex-end" w="full">
              <Link href="/blogs/login">
                <Text color="#000" fontWeight="600">
                  Login
                </Text>
              </Link>
            </Stack>
          </Stack>
        </form>
      </Box>
    </>
  );
};

export default Signup;
