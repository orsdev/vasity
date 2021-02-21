import React from 'react';
import { Grid } from '@chakra-ui/react';

function Story({ children }) {
  return (
    <Grid
      gridRowStart="3 / 4"
      gridColumn="full-start / center-end"
      templateColumns={{
        base: 'repeat(auto-fit, minmax(25rem, 1fr))',
        md: 'repeat(auto-fit, minmax(30rem, 1fr))'
      }}
      gridColumnGap={{ base: 5, md: 7 }}
      gridRowGap={{ base: 8, md: 7 }}
      py={7}>
      {children}
    </Grid>
  );
}

export default Story;
