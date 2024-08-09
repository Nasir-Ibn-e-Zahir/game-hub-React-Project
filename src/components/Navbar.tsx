import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/aws-mobile-hub.svg'

const Navbar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px' margin='0.5rem' /> 
        <Text>  Navbar  </Text>
    </HStack>
  )
}

export default Navbar
