import { Button, ButtonGroup, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'
import GameSorter from './components/GameSorter'

export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null;
  order: string;
}


function App() {
  const [gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery);

  return(
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }} 
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}
    >
      <GridItem area='nav' > <Navbar/> </GridItem>
        <Show above='lg'>
          <GridItem area='aside' paddingX={5}  > 
              <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=> setGameQuery({...gameQuery,genre}) } />
          </GridItem>
        </Show>
      <GridItem area='main'>
        <Flex marginStart={3} columnGap={3} marginBottom={2}>
         <PlatformSelector selectedPlatform={gameQuery.platform} selectPlatform={(platform)=>{ setGameQuery({...gameQuery,platform})  }}   />
         <GameSorter  selectedOrder={gameQuery.order}  sortGames={(order)=> {setGameQuery({...gameQuery,order}) } }  />
        </Flex>
         <GameGrid gameQuery={gameQuery} />   </GridItem>
    </Grid>
  )
}

export default App
