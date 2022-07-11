import React from 'react'
import {Box, Input, Button,Stack, VStack, Text, FormLabel, Image} from '@chakra-ui/react'
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { useForm,SubmitHandler ,FieldError,UseFormRegister, Path} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {PrimaryInput} from './PrimaryInput'


interface FormInputProps {
    password: any;
    error: FieldError | undefined;
    required?: boolean;
  }
  

const schema = yup.object().shape({
    password: yup.string().required("required"),
  });


const ResetPassword=({
    required,
    password,
    error,
  }: FormInputProps) => {

    const {
        register,
        handleSubmit, 
        formState: {errors, isValid},
    } = useForm<FormInputProps>({
        resolver: yupResolver(schema),
        mode:'all',
    });


    const onSubmit: SubmitHandler<FormInputProps> = data => console.log(data);

    const router = useRouter();
    const [showPassword, setShowPassword] = React.useState(true);
    const changePasswordField = ()=>{
        setShowPassword(!showPassword);
    }



    return(
        <>
            <Box w='100%' h='100vh'  display='flex' mt={['-5rem','-3rem','-2rem']} alignItems='center !important' justifyContent='center !important'  >
                <form onSubmit={handleSubmit(onSubmit)} style={{width:'100%'}}>
                    <Stack w={['75%','50%']}  m='auto' alignItems='center' justifyContent='center' spacing={6}>
                        <Image  src='/Group 9.png' alt=''  boxSize={['50%','45%','35%']} />
                        <PrimaryInput
                          label="Password"
                          name="password"
                          defaultValue=""
                          register={register}
                          changePasswordType={changePasswordField}
                          type={showPassword ? 'password' : 'text'}
                          iconClass={showPassword ? 'fa-eye' : 'fa-eye-slash'} error={undefined}              />
            
                        <PrimaryInput
                          label="onfirm Password"
                          name="password"
                          defaultValue=""
                          register={register}
                          changePasswordType={changePasswordField}
                          type={showPassword ? 'password' : 'text'}
                          iconClass={showPassword ? 'fa-eye' : 'fa-eye-slash'} error={undefined}              />
            
                        <Button color='#fff' w='100%' bg='#A03CAE' borderRadius='8px' border='none' _hover={{ color:'#A03CAE', bg:'#fff', border:'1px solid #A03CAE' }} >Reset</Button>
                        
                    </Stack>
                </form>
            </Box>            
        </>
    )
}

export default ResetPassword;