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
              bg="#2E2E2E"
              borderRadius="50%"
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
              alignSelf={{ base: 'center', lg: 'end' }}
              w="full">
              <Text
                as="img"
                alt="Tolu & Joy"
                src={data.photoSrc}
                maxW="full"
                h="100%"
              />
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
                <Text as="p" fontSize={1.6} w="180px">
                  SHARE YOUR OWN STORY!
                </Text>
                <Text as="img" alt="Border" src={Border} w="185px" />
              </Box>
            </Box>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default ToluxJoy;
