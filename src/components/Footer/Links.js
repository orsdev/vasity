import { Box, Text } from '@chakra-ui/react';

function Links() {
  return (
    <Box
      d="grid"
      py={5}
      px={{ base: '8vw', md: '12vw' }}
      gridTemplateColumns={{
        base: 'repeat(auto-fit, minmax(20rem, 1fr)) '
      }}
      gridRowGap={{ base: 4 }}
      justify="center"
      color="background"
      __css={{
        opacity: 0.8,

        '* + p': {
          fontSize: 1.4,
          py: 1
        },

        '* h6': {
          mb: 1
        }
      }}>
      <Box>
        <Text as="h6">Company</Text>
        <Text>About us</Text>
        <Text>Term of Use</Text>
        <Text>Privacy Policy</Text>
        <Text>Press & Media</Text>
      </Box>
      <Box>
        <Text as="h6">Products</Text>
        <Text>Marketplace</Text>
        <Text>Magazine</Text>
        <Text>Seller</Text>
        <Text>Wholesale</Text>
        <Text>Services</Text>
      </Box>
      <Box>
        <Text as="h6">Careers</Text>
        <Text>Become a Campus Rep</Text>
        <Text>Become a Vasiti Influencer</Text>
        <Text>Become a Campus writer</Text>
        <Text>Become an Affiliate</Text>
      </Box>
      <Box>
        <Text as="h6">Get in touch</Text>
        <Text>Contact us</Text>
        <Text>Partner with us</Text>
        <Text>Advertise with us</Text>
        <Text>Help/FAQs</Text>
      </Box>
      <Box>
        <Text as="h6">Join our community</Text>
        <Box
          d="flex"
          mt={3}
          mb={3.5}
          __css={{
            i: {
              d: 'inline-block',
              width: '30px',
              fontSize: 1.6,
              color: 'text'
            },

            div: {
              bg: 'background',
              d: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              borderRadius: '50%',
              width: '24px',
              height: '24px'
            },

            'div:not(:last-child)': {
              mr: 0.6
            }
          }}>
          <Box>
            <Text
              as="i"
              className="fa fa-facebook"
              aria-hidden="true"
            />
          </Box>
          <Box>
            <Text
              as="i"
              className="fa fa-instagram"
              aria-hidden="true"
            />
          </Box>
          <Box>
            <Text
              as="i"
              className="fa fa-twitter"
              aria-hidden="true"
            />
          </Box>
          <Box>
            <Text
              as="i"
              className="fa fa-linkedin"
              aria-hidden="true"
            />
          </Box>
        </Box>
        <Text>Email Newsletter</Text>
      </Box>
    </Box>
  );
}

export default Links;
