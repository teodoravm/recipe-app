import '@fontsource/architects-daughter/400.css';
import './App.module.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { ChakraProvider, Container } from '@chakra-ui/react';
import theme from './theme.fonts';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Main />
    </ChakraProvider>
  );
}

export default App;
