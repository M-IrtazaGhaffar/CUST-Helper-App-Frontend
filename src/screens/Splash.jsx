import { Heading, Box, Image, Spinner } from '@chakra-ui/react'
import React from 'react'
import Logo from '../assets/cust-logo.png'
import { useNavigate } from 'react-router-dom'

function Splash() {

    const navigate = useNavigate();

    React.useEffect(() => {
        setTimeout(() => {
            navigate('/home')
        }, 3000)
    }, [])

    return (
        <Box
            className='home'
            bgColor='gray.300'
            w='100%'
            minHeight='100vh'
            display='flex'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
        >
            <Image
                src={Logo}
                w='200px'
            />
            <Heading
                as='h2'
                size='xl'
                p={6}
                textAlign='center'
            >
                Welcome to CUST Helper
            </Heading>
            <Spinner size='xl' />
        </Box>
    )
}

export default Splash