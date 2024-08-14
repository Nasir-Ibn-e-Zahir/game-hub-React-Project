import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/aws-mobile-hub.svg'
import ColorModeSwitch from './colorModeSwitch'
import SearchInput from './SearchInput'

interface Props{
  onSearch: (searchText:string)=> void;
}

const Navbar = ({onSearch}:Props) => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px' margin='0.5rem' /> 
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch/>


    </HStack>
  )
}

export default Navbar
