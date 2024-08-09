import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/aws-mobile-hub.svg'

const Navbar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px' margin='0.5rem' /> 
    </HStack>
  )
}

export default Navbar
