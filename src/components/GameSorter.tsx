import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props{
    sortGames: (sortOrder:string)=>void;
    selectedOrder: string;
}

const GameSorter = ({sortGames,selectedOrder}:Props) => {
    const sorter = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release Data'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average rating'},
        
    ]

    const sortedOrder = sorter.find(order => order.value === selectedOrder)
    return (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown/>}  >
          Sort by : {sortedOrder?.label? sortedOrder.label :'Relevance' }
          </MenuButton>
          <MenuList>
            {sorter.map(order=> <MenuItem key={order.value}  onClick={()=>sortGames(order.value) } > {order.label} </MenuItem> )}
          </MenuList>
        </Menu>
        )
}

export default GameSorter
