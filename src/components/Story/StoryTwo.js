import { Box, Text, Avatar } from '@chakra-ui/react';
import { storiesTwo } from './db';

function StoryTwo() {
  return (
    <>
      {Object.entries(storiesTwo).map(([key, stories]) => {
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
                  color={
                    data.type == 'VENDOR'
                      ? 'accent.green'
                      : 'accent.blue-200'
                  }
                  bg={
                    data.type == 'VENDOR'
                      ? 'accent.grey'
                      : 'accent.light-200'
                  }
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
    </>
  );
}

export default StoryTwo;
