import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/aws-mobile-hub.svg'
import ColorModeSwitch from './colorModeSwitch'

const Navbar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px' margin='0.5rem' /> 
        <ColorModeSwitch/>


    </HStack>
  )
}

export default Navbar