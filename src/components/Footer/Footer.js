import { Box } from '@chakra-ui/react';
import Banner from './Banner';

function Footer() {
  return (
    <Box
      gridRow={{ base: '7 / -1', md: '6 / 7' }}
      gridColumn="gap-start / -1"
      mt={5}>
      <Banner />
    </Box>
  );
}

export default Footer;
