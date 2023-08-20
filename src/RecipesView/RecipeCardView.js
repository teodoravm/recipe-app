import { Box, Text, Image, UnorderedList, ListItem } from '@chakra-ui/react';

export default function RecipeCardView(props) {
  const missedIngredientsElements = props.missedIngredients?.map((ingr) => {
    return (
      <UnorderedList>
        <ListItem color="red">{ingr.original}</ListItem>
      </UnorderedList>
    );
  });

  const useddIngredientsElements = props.usedIngredients?.map((ingr) => {
    return (
      <UnorderedList>
        <ListItem>{ingr.original}</ListItem>
      </UnorderedList>
    );
  });

  return (
    <Box width="100%" height="100%" alignContent="center">
      <Text
        fontSize="25px"
        padding="10px"
        textAlign="center"
        fontStyle="bold"
        h="20vh"
      >
        {props.title}
      </Text>
      <Image padding="10px" borderRadius="full" src={props.image}></Image>
      <Text
        paddingTop="10px"
        textAlign="center"
        borderBottom="2px"
        borderColor="black"
        marginBottom="15px"
      >
        Ingredients:
      </Text>
      {useddIngredientsElements}
      {missedIngredientsElements}
    </Box>
  );
}
