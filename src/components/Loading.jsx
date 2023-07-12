import { Flex, Spinner, Text } from '@chakra-ui/react'
import React from 'react'

function Loading() {
  return (
    <Flex minHeight='50vh' justifyContent='center' alignItems='center' flexDir='column' gap={10}>
        <Text fontSize={20}>
        Please wait!
        </Text>
        <Spinner size='xl' />
    </Flex>
  )
}

export default Loading