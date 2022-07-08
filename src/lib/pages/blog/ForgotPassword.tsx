import React from 'react'
import {Box, Input, Button,Stack, VStack,Text, FormLabel, Image} from '@chakra-ui/react'


const ForgotPassword=()=> {
    return(
        <>
            <Box w='100%' h='100vh'  display='flex' mt={['-5rem','-3rem','-2rem']} alignItems='center !important' justifyContent='center !important'  >
                    <Stack w={['75%','50%']}  m='auto' alignItems='center' justifyContent='center' spacing={6}>
                        <Image  src='/Group 9.png' alt=''  boxSize={['50%','45%','35%']} />
                        <VStack alignItems='flex-start' w='full' mt='2rem' >
                            <FormLabel color='#000'>Email</FormLabel>
                            <Input type='text' placeholder='' background='#fff !important' size='lg' borderColor='#000' value='' />
                        </VStack>
                        <Button color='#fff' w='100%' bg='#A03CAE' borderRadius='8px' border='none' _hover={{ color:'#A03CAE', bg:'#fff', border:'1px solid #A03CAE' }} >Submit</Button>
                        
                    </Stack>
            </Box>            
        </>
    )
}

export default ForgotPassword;