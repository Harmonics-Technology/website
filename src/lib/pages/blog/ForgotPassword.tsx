import React from 'react'
import {Box, Input, Button,Stack, VStack,Text, FormLabel, Image} from '@chakra-ui/react'
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { useForm, FieldError,SubmitHandler} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    email: yup.string().email().required(),
  });
interface IFormInput {
    email: String;
    error: FieldError | undefined;
    required?: boolean;
}
const ForgotPassword=({email, required, error}: IFormInput)=> {

    const {
        register,
        handleSubmit, 
        formState: {errors, isValid},
    } = useForm<IFormInput>({
        resolver: yupResolver(schema),
        mode:'all',
    });

    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);


    return(
        <>
            <Box w='100%' h='100vh'  display='flex' mt={['-5rem','-3rem','-2rem']} alignItems='center !important' justifyContent='center !important'  >
                <form onSubmit={handleSubmit(onSubmit)} style={{width:'100%'}}>
                    <Stack w={['75%','50%']}  m='auto' alignItems='center' justifyContent='center' spacing={6}>
                        <Image  src='/Group 9.png' alt=''  boxSize={['50%','45%','35%']} />
                        <VStack alignItems='flex-start' w='full' mt='2rem' >
                            <FormLabel color='#000'>Email</FormLabel>
                            <Input type='email' {...register("email",{required: 'required', pattern:{value: /\S+@\S+\.\S+/, message: "Value does not match email format"}})} placeholder='' background='#fff !important' size='lg' borderColor='#000' value='' />
                            <Text fontSize=".7rem" color="red">
                            {errors.email && <span role="alert">{errors.email.message}</span>}
                            </Text>
                        </VStack>
                        <Button color='#fff' w='100%' bg='#A03CAE' borderRadius='8px' border='none' _hover={{ color:'#A03CAE', bg:'#fff', border:'1px solid #A03CAE' }} >Submit</Button>
                        
                    </Stack>
                </form>
            </Box>            
        </>
    )
}

export default ForgotPassword;