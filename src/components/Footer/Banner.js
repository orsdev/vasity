import {
  Grid,
  Box,
  Image,
  Text,
  Input,
  FormControl
} from '@chakra-ui/react';
import BannerImage from '../../assets/images/banner-3.png';
import Button from '../Button';

function Banner() {
  return (
    <Grid
      bg="accent.black-400"
      py={5}
      templateColumns={{
        base: '3rem 4rem repeat(6, 1fr) 4rem 3rem',
        sm: '1fr repeat(6, 6rem) 1fr',
        md: '10rem repeat(6, 1fr) 10rem'
      }}
      templateAutoRows="auto"
      gridColumnGap={{ base: 2, sm: 7 }}
      gridRowGap={{ base: 8, md: 7 }}
      columnGap={7}>
      <Box
        gridColumn={{ base: '2 / 11', sm: '3 / 7', md: '2 / 5' }}
        transform={{ md: 'translateY(-65px)' }}
        gridRowStart={{ sm: 2, md: 1 }}>
        <Image
          src={BannerImage}
          alt="Vasity Banner"
          maxW={{ base: '100%' }}
        />
      </Box>
      <Box
        gridColumn={{ base: '2 / 10', sm: '3 / 8', md: '5 / 8' }}
        gridRowStart={{ base: 1, md: 1 }}
        alignSelf="center"
        pr={{ base: 0, sm: '12vw', md: '4vw' }}
        pl={{ md: '4vw' }}>
        <Text as="h5" color="background" mb={1} lineHeight="2.3rem">
          Be a member of our community 🎉
        </Text>
        <Text
          fontSize={1.6}
          color="background"
          fontSize={{ base: 1.6, md: 1.4 }}
          mt={1.5}
          pr={{ base: '5vw', lg: 0 }}>
          We’d make sure you’re always first to know what’s happening
          on Vasiti—thus, the world.
        </Text>
        <FormControl
          mt={1.5}
          id="email"
          d="flex"
          align="center"
          h="37px"
          bg="rgba(255, 255, 255, 0.2)"
          borderRadius="6px">
          <Input
            type="email"
            border="none"
            placeholder="enter your email address"
            px={1}
            h="full"
            _placeholder={{
              color: 'background',
              fontSize: [1.6, 1.6, 1.5, 1.3]
            }}
          />
          <Button
            bg="background"
            h="96%"
            fontFamily="roboto"
            _hover={{
              bg: 'background',
              opacity: 0.8
            }}
            fontSize={1.3}>
            SUBSCRIBE
          </Button>
        </FormControl>
      </Box>
    </Grid>
  );
}

export default Banner;
