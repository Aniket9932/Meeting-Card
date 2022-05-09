import React from 'react'
import { VStack, Flex, Box, Image, Text } from '@chakra-ui/react'

function App() {
  return (
    <div>
      <VStack>
        <Flex width={"100%"}>
          <Box className='meeting' 
          width={"300px"} height="200px" m="5px" border={"1px"} 
          borderRadius='md' pt={"55px"} pl="40px" pr={"40px"}>
            <Flex>
              <Image width={"80px"} height="80px"
              src='https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/344/external-video-call-discussion-xnimrodx-lineal-xnimrodx-2.png'></Image>
              <Box className='details' ml={"10px"}>
                <Text fontWeight={"bold"} p="2px">Video</Text>
                <Text display={"flex"} p="3px">Consult virtually with Doctors</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </VStack>
    </div>
  )
}

export default App