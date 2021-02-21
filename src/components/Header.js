import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Button from './Button';
import Logo from './Logo';
import NavLink from './NavLink';

const Header = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <Box
      pos="relative"
      py={1}
      px={{ base: 0, md: 2 }}
      display="grid"
      alignItems="center"
      bg="transparent"
      gridTemplateRows="6rem 1fr"
      gridTemplateColumns={{
        base:
          '3rem [frontgap-start] 4rem [frontgap-end logo-start] 1fr [logo-end center-start] min-content [center-end lastgap-start] 4rem [lastgap-end] 3rem',
        md:
          '3rem [frontgap-start] 4rem [frontgap-end logo-start] max-content [logo-end center-start] min-content [center-end col-start] 1fr [col-end lastgap-start] 4rem [lastgap-end] 3rem'
      }}>
      <Logo />
      <Button
        visibility={{ base: 'visible', md: 'hidden' }}
        opacity={{ base: '1', md: '0' }}
        gridColumn="center-start / center-end"
        color="text"
        fontSize={2.4}
        p={1}
        _hover={{
          opacity: 0.6
        }}
        __css={{
          border: 'none'
        }}
        onClick={() => setIsVisible(!isVisible)}>
        <Text as="i" className="fa fa-bars" />
      </Button>
      <Flex
        display="flex"
        h={{ base: isVisible ? '100%' : 0, md: 'auto' }}
        px={1}
        overflowY={{
          base: isVisible ? 'visible' : 'hidden',
          md: 'visible'
        }}
        opacity={{ base: isVisible ? 1 : 0, md: 1 }}
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'flex-start', md: 'flex-end' }}
        gridColumn={{
          base: 'logo-start / center-end',
          md: 'col-start / col-end'
        }}
        gridRow={{ base: '2 / -1', md: '1 / 2' }}
        mt={{ base: 1, md: 0 }}
        alignItems={{ base: 'flex-start', md: 'center' }}
        color="text"
        transition="opacity .4s ease"
        bg={{ base: 'accent.light-200', md: 'transparent' }}>
        <NavLink />
        <Button
          display="inline-block"
          fontSize={1.3}
          py={2}
          px={2}
          _hover={{
            opacity: 0.6
          }}
          __css={{
            border: 'none'
          }}>
          LOG IN
        </Button>
        <Button
          display="inline-block"
          fontSize={1.3}
          h={{ base: 'auto', md: '36px' }}
          px={1}
          py={{ base: 1 }}
          borderRadius="4px"
          color="background"
          fontWeight="600"
          bg="secondary"
          _hover={{
            opacity: 0.8
          }}
          __css={{
            border: 'none'
          }}>
          SIGN UP
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
