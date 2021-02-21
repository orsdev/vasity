import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import THEME from './style/theme';

const breakpoints = createBreakpoints({
  sm: '500px',
  md: '900px',
  lg: '1200px'
});

const theme = extendTheme({
  ...THEME,
  breakpoints
});

const RootThemeProvider = ({ children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export default RootThemeProvider;
