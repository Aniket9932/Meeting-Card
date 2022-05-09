import React from 'react'
import { VStack, Flex, Box, Text, Icon } from '@chakra-ui/react'
import { FaLaptopHouse,FaMicroscope } from 'react-icons/fa'
import { BiHomeSmile } from 'react-icons/bi'

function App() {
  return (
    <div>
      <VStack>
        <Flex width={"100%"}>
          <Box className='meeting-online' 
          width={"300px"} height="200px" m="5px" border={"1px"} 
          borderRadius='md' pt={"55px"} pl="40px" pr={"40px"}>
            <Flex>
              <Icon width={"85px"} height="85px"><FaLaptopHouse size={"20px"}/></Icon>
              <Box className='details'>
                <Text fontWeight={"bold"} p="2px">Video</Text>
                <Text display={"flex"} p="3px">Consult virtually with Doctors</Text>
              </Box>
            </Flex>
          </Box>
          <Box className='meeting-inclinic' 
          width={"300px"} height="200px" m="5px" border={"1px"} 
          borderRadius='md' pt={"55px"} pl="40px" pr={"40px"}>
            <Flex>
            <Icon width={"85px"} height="85px"><BiHomeSmile size={"20px"}/></Icon>
              <Box className='details' ml={"15px"}>
                <Text fontWeight={"bold"} p="2px">Inclinic</Text>
                <Text display={"flex"} p="3px">Find Doctors near you</Text>
              </Box>
            </Flex>
          </Box>
          <Box className='lab-test' 
          width={"300px"} height="200px" m="5px" border={"1px"} 
          borderRadius='md' pt={"55px"} pl="40px" pr={"40px"}>
            <Flex>
            <Icon width={"85px"} height="85px"><FaMicroscope size={"20px"}/></Icon>
              <Box className='details' ml={"15px"}>
                <Text fontWeight={"bold"} p="2px">Lab-Test</Text>
                <Text display={"flex"} p="3px">Lab Tests at Home</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </VStack>
    </div>
  )
}

export default App