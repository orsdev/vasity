import { Box } from '@chakra-ui/react';
import VasityLogo from '../assets/images/logo.png';

const Logo = () => (
  <Box
    as="img"
    w="100px"
    src={VasityLogo}
    objectFit="contain"
    alt="Vasity Logo"
    display="block"
    cursor="pointer"
    justifySelf="start"
    gridColumn="logo-start / logo-end"
  />
);

export default Logo;
