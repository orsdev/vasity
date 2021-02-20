import { Box } from '@chakra-ui/react';
import RootThemeProvider from './components/ChakraProvider';
import Header from './components/Header';

function App() {
  return (
    <>
      <RootThemeProvider>
        <Header />
        <Box
          d="grid"
          gridTemplateColumns={{
            base:
              '[gap-start] 10rem [gap-end full-start] minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end]) [center-end] minmax(6rem, 1fr) [full-end]'
          }}
          gridTemplateRows={{
            base: '80vh repeat(4, 40vw) min-content'
          }}></Box>
      </RootThemeProvider>
    </>
  );
}

export default App;
