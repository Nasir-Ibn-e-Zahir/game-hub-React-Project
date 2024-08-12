import {FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux, FaAndroid  } from 'react-icons/fa'
import { Platform } from '../hooks/useGames'
import {HStack, Icon, Text} from '@chakra-ui/react';
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { IconType } from 'react-icons';

interface Props{
    platforms: Platform[];
}

const PlatFormIconsList = ({platforms}:Props) => {
    const iconMap: {[key:string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        andriod: FaAndroid

    }
  return (
    <HStack marginY={1} >
        {platforms.map((platform)=>( 
            <Icon color='gray.500' as={iconMap[platform.slug]}  />
            ))}
      
    </HStack>
  )
}

export default PlatFormIconsList
