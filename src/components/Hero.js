import { Box, Text } from '@chakra-ui/react';
import HeroImage from '../assets/images/hero.png';

function Hero() {
  return (
    <>
      <Box
        mb={{ base: 2, md: 5 }}
        gridColumn={{
          base: 'full-start / center-end',
          md: 'full-start / col-end 4'
        }}
        alignSelf="start"
        px={{ base: '2vw', sm: '10vw', md: 0 }}
        pt="6vw">
        <Text as="h1">
          <Text
            as="span"
            fontSize="inherit"
            fontWeight="inherit"
            lineHeight="inherit"
            d="block">
            Amazing
          </Text>
          Experiences from Our Wonderful Customers
        </Text>
        <Text as="p" color="accent.black-200" py={1} pr="10vw">
          Here is what customers and vendors are saying about us, you
          can share your stories with us too.
        </Text>
      </Box>
      <Box
        gridColumn={{
          base: 'gap-start / -1',
          sm: null,
          md: 'col-end 4 / center-end'
        }}
        gridRowStart={{ base: 2, md: 1 }}
        justifySelf="center"
        alignSelf="start">
        <Text
          as="img"
          src={HeroImage}
          w={{ base: '70vh', sm: '65vw', md: 'full' }}
          objectFit="contain"
          alt="Vasity Hero Image"
        />
      </Box>
    </>
  );
}

export default Hero;
