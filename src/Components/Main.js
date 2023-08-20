import { Container, Heading, Button, Textarea, Text } from '@chakra-ui/react';
import React from 'react';
import RecipeCardView from '../RecipesView/RecipeCardView';

function Main() {
  const apiKey = 'YOUR KEY HERE';
  const [value, setValue] = React.useState('');
  const [recipes, setRecipes] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState('');

  function HandleClick() {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${value}&number=4&apiKey=${apiKey}&sort=min-missing-ingredients`
    )
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
        setErrorMessage('Oops... something went wrong!');
      })
      .then((data) => {
        setRecipes(data);
      });
  }

  React.useEffect(() => {
    HandleClick();
  }, []);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  const recipeElements = recipes?.map((recipe) => {
    console.log(recipe.missedIngredients);
    return (
      <RecipeCardView
        title={recipe.title}
        image={recipe.image}
        missedIngredients={recipe.missedIngredients}
        usedIngredients={recipe.usedIngredients}
      />
    );
  });

  return (
    <Container
      minW="100vw"
      minH="100vh"
      bgColor="#F8F0E5"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Heading fontSize="45px" margin="10" padding="5">
        Generate a recipe using the ingredients you have!
      </Heading>

      <Textarea
        placeholder="Please enter your ingredients separated by a comma."
        bgColor="#F5F5F5"
        value={value}
        onChange={handleInputChange}
        width="80%"
      ></Textarea>
      <Button
        colorScheme="grey"
        variant="outline"
        marginTop="10px"
        marginBottom="30px"
        onClick={HandleClick}
      >
        Search
      </Button>

      {recipeElements?.length > 0 && (
        <Heading margin="25px" fontSize="30px">
          Here's what we found...
        </Heading>
      )}
      {recipeElements ? (
        <Container
          display="flex"
          gap="70px"
          justifyContent="center"
          minH="100vh"
          minW="100vw"
          paddingEnd="3%"
        >
          {recipeElements}
        </Container>
      ) : (
        <Text fontSize="40px" textAlign="center">
          {errorMessage}
        </Text>
      )}
    </Container>
  );
}

export default Main;
