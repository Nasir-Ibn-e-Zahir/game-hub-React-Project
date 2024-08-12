import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import PlatFormIconsList from './PlatFormIconsList'
import CrtictScore from './CrtictScore'
import getCroppedImageUrl from '../services/image-url'

interface Props{
    game: Game
}

const GameCard = ({game}:Props) => {
  return (
  <>
  <Card  borderRadius={10} overflow='hidden' width={'300px'}  >
    <Image src={getCroppedImageUrl(game.background_image)} />
    <CardBody>   
        <Heading fontSize='2xl' >
            {game.name}
        </Heading>
        <HStack justifyContent='space-between' >
          <PlatFormIconsList platforms={game.parent_platforms.map(p => p.platform)}  />
          <CrtictScore  criticScore={game.metacritic} />  
        </HStack>
           </CardBody>
  </Card>
  </>
  )
}

export default GameCard
