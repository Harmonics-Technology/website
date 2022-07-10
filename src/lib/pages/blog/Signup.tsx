import React from 'react'
import {Box, Input, Button,Stack,Link, VStack,Text, FormLabel, Image} from '@chakra-ui/react'
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { useForm,SubmitHandler ,FieldError,UseFormRegister, Path} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface FormInputProps {
    name: string;
    email: string;
    password: any;
    error: FieldError | undefined;
    required?: boolean;
  }

  const schema = yup.object().shape({
    email: yup.string().email().required("required"),
    password: yup.string().required("required"),
  });

const Signup=({
    required,
    email,
    name,
    password,
    error,
  }: FormInputProps)=> {

    const {
        register,
        handleSubmit, 
        formState: {errors, isValid},
    } = useForm<FormInputProps>({
        resolver: yupResolver(schema),
        mode:'all',
    });


    const onSubmit: SubmitHandler<FormInputProps> = data => console.log(data);




    return(
        <>
            <Box w='100%' h='100vh' display='flex' mt={['-5rem','-3rem','-2rem']} alignItems='center !important' justifyContent='center !important'  >
                    <Stack w={['75%','50%']}  m='auto' alignItems='center' justifyContent='center' spacing={6}>
                        <Image  src='/Group 9.png' alt=''  boxSize={['50%','45%','35%']} />
                        <form onSubmit={handleSubmit(onSubmit)} style={{width:'100%'}}>
                            <VStack alignItems='flex-start' w='full' mt='2rem' >
                                <FormLabel color='#000'>Name</FormLabel>
                                <Input {...register("name", {required: 'required'})} type='text' color="#000"  placeholder='' background='#fff !important' size='lg' borderColor='#000' value='' />
                                <Text fontSize=".7rem" color="red">
                                {errors.name && <span role="alert">{errors.name.message}</span>}
                                </Text>
                            </VStack>
                            <VStack alignItems='flex-start' w='full' mt='2rem' >
                                <FormLabel color='#000'>Email</FormLabel>
                                <Input {...register("email",{required: 'required', pattern:{value: /\S+@\S+\.\S+/, message: "Value does not match email format"}})} type='email' color="#000"  placeholder='' background='#fff !important' size='lg' borderColor='#000' value='' />
                                <Text fontSize=".7rem" color="red">
                                {errors.email && <span role="alert">{errors.email.message}</span>}
                                </Text>
                            </VStack>
                            <VStack alignItems='flex-start' w='full'>
                                <FormLabel color='#000'>Password</FormLabel>
                                <Input {...register("password", {required: "required", minLength: {value: 5,message: "minimum lenght is 5"}})} type='password' placeholder='' color="#000" background='#fff !important' size='lg' borderColor='#000' value=''  />
                                <Text fontSize=".7rem" color='red'>
                                {errors.password && <span role="alert">{errors.password.message}</span>}
                                </Text>
                            </VStack>
                            <Button color='#fff' w='100%' bg='#A03CAE' borderRadius='8px' border='none' _hover={{ color:'#A03CAE', bg:'#fff', border:'1px solid #A03CAE' }} >Sign up</Button>
                            <Stack alignItems='flex-end'w='full' >
                            <Link href='/login'>
                                <Text color='#000'fontWeight='600' >Login</Text>
                                </Link>
                            </Stack>
                        </form>
                    </Stack>
            </Box>            
        </>
    )
}

export default Signup;