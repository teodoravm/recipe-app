import { Container, Heading, Box } from '@chakra-ui/react';
import styles from '../App.module.css';
import image from '../res/recipe2.png';

function Header() {
  return (
    <Container
      bgImage={image}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="100vw"
      minW="100vw"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        width="100%"
        height="100px"
        bgColor="white"
        display="flex"
        alignItems="center"
        gap="35px"
        ps="20"
      >
        <Heading fontSize="30">Breakfast</Heading>
        <Heading fontSize="30">Lunch</Heading>
        <Heading fontSize="30">Dinner</Heading>
      </Box>

      <Box
        width="60%"
        height="100px"
        bgColor="white"
        display="flex"
        alignItems="center"
        gap="35px"
        ps="20"
      >
        <Heading fontSize="30" justifyItems="end">
          Find a recipe quickly
        </Heading>
      </Box>

      <div class={styles.square}>
        <span></span>
        <span></span>
        <span></span>
        <div class={styles.content}>
          <Heading fontSize="50">Your Personal CookBook.</Heading>
        </div>
      </div>
    </Container>
  );
}

export default Header;
