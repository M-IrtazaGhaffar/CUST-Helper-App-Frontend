import { Box } from '@chakra-ui/react'
import React from 'react'

function UnderConstruction() {
  return (
    <Box
        bgColor="gray.300"
        w="100%"
        minHeight="100vh"
        display='flex'
        flexDirection='column'
        gap={5}
        justifyContent='center'
        alignItems='center'
        fontSize='3xl'
        fontWeight='bold'
      >
        Under Construction!
        <Box
        fontSize='lg'
        fontWeight='normal'
        >
          (Will be available soon Insha'Allaho'Ta'Allah)
        </Box>
      </Box>
  )
}

export default UnderConstruction