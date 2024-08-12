import { Badge, Box } from '@chakra-ui/react'
import React from 'react'

interface Props{
    criticScore: number
}

const CrtictScore = ({criticScore}:Props) => {
 let color = criticScore > 75 ? 'green' : criticScore > 60 ? 'yellow' :'';  
  return (

     <Badge fontSize={'14px'} colorScheme={color} paddingX={2} borderRadius={'4px'} >
        {criticScore}
     </Badge>
    
  )
}

export default CrtictScore
