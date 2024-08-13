import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const GameSorter = () => {
    return (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown/>}  >
              Sort by : Relevance
          </MenuButton>
          <MenuList>
            <MenuItem>Relevance</MenuItem>
            <MenuItem>Date Added</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>Release Date</MenuItem>
            <MenuItem>Popularity</MenuItem>
            <MenuItem>Average</MenuItem>
          </MenuList>
        </Menu>
        )
}

export default GameSorter
