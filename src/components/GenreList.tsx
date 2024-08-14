import React from "react";
import useGenres from "../hooks/useGenres";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenres";
import { Button, ButtonSpinner, Heading, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props{
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre,selectedGenre}:Props) => {
  const { data , isLoading,error} = useData<Genre>("/genres");

  if(error) return null;
  if(isLoading) return <Spinner/>
  return (
    <>
    <Heading fontSize={'2xl'} marginTop={7} marginBottom={3} > Genres </Heading>
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px' >
          <HStack>
            <Image boxSize='32px' borderRadius={8} objectFit='cover'  src={getCroppedImageUrl(genre.image_background)} />
            <Button fontSize='lg' whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id? 'bold' : 'normal'} onClick={()=> {onSelectGenre(genre)} } variant='link' > {genre.name} </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </> 
  );
};

export default GenreList;
