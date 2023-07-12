import { Button, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'

function AddTeacher() {
  return (
    <div>
      <Flex alignItems='center' flexDirection='column' gap={5}>
        <Text fontSize={15}>
          Note: Make sure to add the Real name (Full Name) of Teacher. Teachers may also have same name!
        </Text>
        <Input name='teacher' placeholder='Enter Teacher' required bg='white' width='100%' />
        <Button colorScheme='blue' alignSelf='flex-end'>Add</Button>
      </Flex>
    </div>
  )
}

export default AddTeacher