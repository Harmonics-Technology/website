import React from 'react';
import { Box, Button, Stack, Link, Text, Image } from '@chakra-ui/react';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PrimaryInput } from '../../components/Utils/PrimaryInput';
import { BiHide, BiShowAlt } from 'react-icons/bi';

interface FormInputProps {
  fullName: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required('required'),
  fullName: yup.string().email().required('required'),
  password: yup.string().required('required'),
});

const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(true);
  const changePasswordField = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormInputProps>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = (data: FormInputProps) => {};

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
            <PrimaryInput<FormInputProps>
              name="fullName"
              error={errors.fullName}
              defaultValue=""
              register={register}
              label="Full name"
              placeholder="Adekunle watawi"
            />
            <PrimaryInput<FormInputProps>
              name="email"
              error={errors.email}
              defaultValue=""
              register={register}
              label="Email"
              placeholder="user@harmonicstechnology.com"
            />
            <PrimaryInput<FormInputProps>
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
