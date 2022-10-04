import { Button, Heading, VStack, useToast, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PrimaryInput } from 'lib/components/Utils/PrimaryInput';
import { BiHide, BiShowAlt } from 'react-icons/bi';
import { UserService, UserViewStandardResponse } from '../../../../client';
import { useRouter } from 'next/router';

type UpdateUserPassword = {
  password: string | undefined;
};

const ChangePassword = () => {
  const schema = yup.object().shape({
    password: yup.string().required(),
  });

  const toast = useToast();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(true);

  const changePasswordField = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<UpdateUserPassword>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = async (data: UpdateUserPassword) => {
    try {
      const response = (await UserService.updatePassword({
        password: data.password,
      })) as UserViewStandardResponse;
      console.log({ response });
      if (response.status) {
        toast({
          position: 'top-right',
          duration: 9000,
          render: () => (
            <Box color="white" p={3} bg="brand.100">
              {response.message}
            </Box>
          ),
        });
        router.push('/login');
        return;
      }
      toast({
        position: 'top-right',
        duration: 9000,
        render: () => (
          <Box color="white" p={3} bg="red.500">
            {response.message}
          </Box>
        ),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Heading fontSize="20px" lineHeight={1.5} textTransform="capitalize">
        change password
      </Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={5} alignItems="flex-start" mt="40px">
          <PrimaryInput<UpdateUserPassword>
            name="password"
            defaultValue=""
            register={register}
            changePasswordType={changePasswordField}
            type={showPassword ? 'password' : 'text'}
            error={errors.password}
            icon={showPassword ? <BiShowAlt /> : <BiHide />}
            label="change password"
            placeholder="********"
          />

          <Button
            my="25px"
            color="#fff"
            w="200px"
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
            Change Password
          </Button>
        </VStack>
      </form>
    </>
  );
};

export default ChangePassword;
