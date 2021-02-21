import { Box } from '@chakra-ui/react';
import RootThemeProvider from './components/ChakraProvider';
import Header from './components/Header';
import Testimonial from './pages/Testimonial';

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
            base:
              'Repeat(2, min-content) repeat(4, 40vw) min-content',
            md: '80vh repeat(4, 40vw) min-content'
          }}>
          <Testimonial />
        </Box>
      </RootThemeProvider>
    </>
  );
}

export default App;
