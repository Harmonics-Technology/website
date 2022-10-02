import { Button, Heading, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PrimaryInput } from 'lib/components/Utils/PrimaryInput';
import { BiHide, BiShowAlt } from 'react-icons/bi';

const ChangePassword = () => {
  const schema = yup.object().shape({
    password: yup.string().required(),
  });

  const [showPassword, setShowPassword] = useState(true);

  const changePasswordField = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });
  return (
    <>
      <Heading fontSize="20px" lineHeight={1.5} textTransform="capitalize">
        change password
      </Heading>

      <form>
        <VStack spacing={5} alignItems="flex-start" mt="40px">
          <PrimaryInput
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
