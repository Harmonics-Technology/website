import React from 'react';
import { Box, Button, Stack, Image } from '@chakra-ui/react';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PrimaryInput } from './PrimaryInput';
import { BiHide, BiShowAlt } from 'react-icons/bi';

interface FormInputProps {
  password: string;
}

const schema = yup.object().shape({
  password: yup.string().required('required'),
});

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormInputProps>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = (data: FormInputProps) => {};

  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(true);
  const changePasswordField = () => {
    setShowPassword(!showPassword);
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
              name="password"
              defaultValue=""
              register={register}
              changePasswordType={changePasswordField}
              type={showPassword ? 'password' : 'text'}
              error={errors.password}
              icon={showPassword ? <BiShowAlt /> : <BiHide />}
              label="old password"
              placeholder="old password"
            />
            <PrimaryInput<FormInputProps>
              name="password"
              defaultValue=""
              register={register}
              changePasswordType={changePasswordField}
              type={showPassword ? 'password' : 'text'}
              error={errors.password}
              placeholder="new password"
              icon={showPassword ? <BiShowAlt /> : <BiHide />}
              label="new password"
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
              Reset
            </Button>
          </Stack>
        </form>
      </Box>
    </>
  );
};

export default ResetPassword;
