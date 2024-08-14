import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames';
import platforms from '../data/platforms';

interface Props{
    selectPlatform: (platform:Platform)=>void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({selectPlatform,selectedPlatform}:Props) => {

    const {data,error} = {data:platforms,error:null};
    if(error) return null;
  return (
  <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown/>}  >
        {selectedPlatform? selectedPlatform.name :  'Platforms'}
    </MenuButton>
    <MenuList>
      {data.map(platform=> <MenuItem onClick={()=>{selectPlatform(platform)}} key={platform.id} > {platform.name}  </MenuItem> )}
    </MenuList>
  </Menu>
  )
}

export default PlatformSelector
