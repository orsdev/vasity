import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Border from '../../assets/images/border.png';

function ToluxJoy({ name }) {
  return (
    <>
      {name.map((data) => {
        return (
          <React.Fragment key={data.title}>
            <Box
              pos="relative"
              display="flex"
              justify="center"
              gridRow={{
                base: '3 / 4',
                sm: '3 / -1',
                md: '2 / -1'
              }}
              gridColumn={{
                base: '1 / -1',
                sm: '3 / 6',
                md: '2 / 3'
              }}
              alignSelf={{ base: 'center', lg: 'end' }}>
              <Box bg="#2E2E2E" borderRadius="50%">
                <Text
                  as="img"
                  d="inline-block"
                  alt="Tolu & Joy"
                  src={data.photoSrc}
                  objectFit="contain"
                />
              </Box>
            </Box>
            <Box
              gridRow={{ base: '2 / 3', sm: '2 / 3', md: '2 / 6' }}
              gridColumn={{
                base: '2 / 7',
                sm: '3 / 7',
                md: '3 / 4'
              }}
              alignSelf="center"
              color="background">
              <Text as="h3">{data.title}</Text>
              <Text
                as="span"
                d="inline-block"
                border="1px solid rgba(255, 255, 255, 0.4)"
                px={1}
                py={0.5}
                mt={0.5}
                borderRadius="4px">
                {data.type}
              </Text>
              <Text as="p" pr="2vw" my={3}>
                {data.text}
              </Text>
              <Box>
                <Text as="p" fontSize={1.6}>
                  SHARE YOUR OWN STORY!
                </Text>
                <Text as="img" alt="Border" src={Border} w="216px" />
              </Box>
            </Box>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default ToluxJoy;
