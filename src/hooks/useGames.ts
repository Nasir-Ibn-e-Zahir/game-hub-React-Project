import useData from './useData';
import { Genre } from './useGenres';
import { GameQuery } from '../App';

export interface Platform{
  id: number;
  name: string;
  slug: string;
}
export interface Game{
    id: number;
    name: string;
    background_image:string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    rating_top: number;
     
}

interface FetchGamesResponse {
    count: number,
    results:Game[]
}


const useGames = (gameQuery: GameQuery) => useData<Game>('/games', {params:{genres: gameQuery.genre?.id,ordering:gameQuery.order,platforms: gameQuery.platform?.id, search: gameQuery.searchText}},[gameQuery] )

export default useGames;