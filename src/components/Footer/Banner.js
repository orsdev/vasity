import {
  Heading,
  Flex,
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
    <Flex
      py={5}
      justify="center"
      align={{ base: 'center', md: 'start' }}
      flexDirection={{ base: 'column', md: 'row' }}>
      <Box
        transform={{ md: 'translateY(-75px)' }}
        textAlign="center"
        order={{ base: 2, md: 1 }}
        w={{ base: '70%', md: '50%' }}>
        <Image
          d={{ base: 'inline-block', md: 'block' }}
          src={BannerImage}
          alt="Vasity Banner"
          maxW={{ base: '80%' }}
          objectFit="contain"
        />
      </Box>
      <Box
        alignSelf={{ md: 'start' }}
        w={{ base: '70%', sm: '50%', md: '360px' }}
        order={{ base: 1, md: 2 }}
        mb={{ base: 4, md: 0 }}>
        <Heading
          as="h5"
          color="background"
          mb={1}
          lineHeight="2.3rem">
          Be a member <br />
          of our community 🎉
        </Heading>
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
    </Flex>
  );
}

export default Banner;
