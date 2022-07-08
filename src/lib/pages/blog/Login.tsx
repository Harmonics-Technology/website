import React, {useState} from 'react'
import {Box, Input,Link, Button,Stack,VStack,Text, FormLabel, Image} from '@chakra-ui/react'
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

const Login=()=> {

    const {
        handleSubmit, 
        formState: {errors, isValid},
    } = useForm({
        resolver: yupResolver(schema),
        mode:'all',
    });

    const router = useRouter();
    const [showPassword, setShowPassword] = useState(true);
    const changePasswordField = ()=>{
        setShowPassword(!showPassword);
    }

    const handleAfterLogin = () => {
        if (router.query && router.query.from) {
          router.push(router.query.from as unknown as string);
        } else {
          window.location.href = '/';
        }
      };

      const onSubmit = () =>{
        handleAfterLogin();
        
      }

    return(
        <>
            <Box w='100%' h={['100vh','100vh']} mt={['-5rem','-3rem','-2rem']}  display='flex' alignItems='center !important' justifyContent='center !important'  >
                <form onSubmit={handleSubmit(onSubmit)} style={{width:'100%'}}>
                    <Stack w={['75%','50%']}  m='auto' alignItems='center' justifyContent='center' spacing={6}>
                        <Image  src='/Group 9.png' alt='' boxSize={['50%','45%','35%']} />
                        <VStack alignItems='flex-start' w='full' mt='2rem' >
                            <FormLabel color='#000'>Email</FormLabel>
                            <Input type='text' placeholder='' background='#fff !important' size='lg' borderColor='#000' value='' />
                        </VStack>
                        <VStack alignItems='flex-start' w='full'>
                            <FormLabel color='#000'>Password</FormLabel>
                            <Input type='password' placeholder='' background='#fff !important' size='lg' borderColor='#000' value=''  />
                        </VStack>
                        <Button color='#fff' w='100%' bg='#A03CAE' borderRadius='8px' border='none' _hover={{ color:'#A03CAE', bg:'#fff', border:'1px solid #A03CAE' }} >Login</Button>
                        <Stack alignItems='flex-end'w='full' >
                           <Link  href='/forgot-password'>
                            <Text as='span' color='#000' fontWeight='600'>
                                Forgot password
                            </Text>
                            </Link>
                        </Stack>
                    </Stack>
                </form>
            </Box>            
        </>
    )
}

export default Login;