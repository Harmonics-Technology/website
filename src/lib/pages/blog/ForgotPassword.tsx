import React from 'react'
import {Box, Input, Button,Stack, VStack,Text, FormLabel, Image} from '@chakra-ui/react'
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { useForm, FieldError,SubmitHandler} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PrimaryInput } from './PrimaryInput';

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
                        <Image  src='/Group 9.png' alt='' mb='2rem' boxSize={['50%','45%','35%']} />
                        <PrimaryInput
                            label="Email"
                            name="email"
                            error={errors.email}
                            defaultValue=""
                            register={register}
                        />
                        <Button color='#fff' w='100%' bg='#A03CAE' borderRadius='8px' border='none' _hover={{ color:'#A03CAE', bg:'#fff', border:'1px solid #A03CAE' }} >Submit</Button>
                        
                    </Stack>
                </form>
            </Box>            
        </>
    )
}

export default ForgotPassword;