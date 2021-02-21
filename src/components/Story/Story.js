import React from 'react';
import { Grid, Box, Text, Avatar } from '@chakra-ui/react';
import { storiesOne } from './db';

function Story() {
  return (
    <Grid
      gridRowStart="3 / 4"
      gridColumn="full-start / center-end"
      templateColumns={{
        base: 'repeat(auto-fit, minmax(25rem, 1fr))',
        md: 'repeat(auto-fit, minmax(30rem, 1fr))'
      }}
      gap={{ base: 5, md: 7 }}
      py={7}>
      {Object.entries(storiesOne).map(([key, stories]) => {
        return stories.map((data, index) => {
          return (
            <Box key={data.name + index}>
              <Avatar
                src={data.photoSrc}
                name={data.name}
                w={{ base: 120, md: 150 }}
                h={{ base: 120, md: 150 }}
              />
              <Text
                as="h5"
                color="accent.black-300"
                mt={1.5}
                mb={1}
                lineHeight="2.3rem">
                {data.name}
              </Text>
              <Text>
                <Text
                  as="span"
                  fontSize={1.5}
                  d="inline-block"
                  mr={1}>
                  {data.location}
                </Text>
                <Text
                  as="span"
                  color="accent.blue-200"
                  bg="accent.light-200"
                  px={1}
                  py={0.5}>
                  {data.type}
                </Text>
              </Text>
              <Text
                fontSize={1.6}
                color="accent.black-300"
                mt={1.5}
                pr={{ base: '5vw', lg: 0 }}>
                {data.text}
              </Text>
            </Box>
          );
        });
      })}
    </Grid>
  );
}

export default Story;
