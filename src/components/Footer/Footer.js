import { Box } from '@chakra-ui/react';
import Banner from './Banner';
import Links from './Links';

function Footer() {
  return (
    <Box
      gridRow={{ base: '7 / -1', md: '6 / 7' }}
      gridColumn="gap-start / -1"
      mt={5}
      bg="accent.black-400">
      <Banner />
      <Links />
    </Box>
  );
}

export default Footer;
