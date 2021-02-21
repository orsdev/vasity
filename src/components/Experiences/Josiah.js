import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Border from '../../assets/images/border.png';

function Josiah({ name }) {
  return (
    <>
      {name.map((data) => {
        return (
          <React.Fragment key={data.title}>
            <Box
              gridRow={{ base: '3 / 4', md: '2 / 6' }}
              gridColumn={{
                base: '2 / 7',
                sm: '3 / 7',
                md: '2 / 3'
              }}
              alignSelf="center"
              color="text">
              <Text as="h3">{data.title}</Text>
              <Text
                as="span"
                d="inline-block"
                border="1px solid rgba(255,92,0,1)"
                color="secondary"
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
                <Text as="p" fontSize={1.6} color="secondary">
                  SHARE YOUR OWN STORY!
                </Text>
                <Text
                  as="img"
                  alt="Border"
                  src={Border}
                  w={{ base: '180px', lg: '218px' }}
                />
              </Box>
            </Box>
            <Box
              pos="relative"
              display="flex"
              justify="center"
              gridRow={{
                base: '2 / 3',
                md: '2 / -1'
              }}
              gridColumn={{
                base: '2 / 7',
                sm: '3 / 6',
                md: '3 / 4'
              }}
              alignSelf={{ base: 'center', lg: 'end' }}>
              <Text
                as="img"
                d="inline-block"
                alt="Tolu & Joy"
                borderRadius={{ base: '50%', md: '0' }}
                src={data.photoSrc}
                objectFit="contain"
              />
            </Box>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default Josiah;
