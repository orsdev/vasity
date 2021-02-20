import { Box } from '@chakra-ui/react';

const LINKS = [
  {
    href: 'ABOUT US'
  },
  {
    href: 'STORIES'
  },
  {
    href: 'CONTACT'
  }
];

const NavLink = () => {
  return (
    <>
      {LINKS.map(({ href }, index) => (
        <Box
          key={index + href}
          as="a"
          href="#"
          display="inline-block"
          fontWeight="400"
          fontSize={1.3}
          py={2}
          px={2}
          color="text"
          _hover={{
            opacity: 0.6
          }}
          __css={{
            cursor: 'pointer'
          }}>
          {href}
        </Box>
      ))}
    </>
  );
};

export default NavLink;
