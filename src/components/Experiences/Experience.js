import React from 'react';
import { Box } from '@chakra-ui/react';
import ToluxJoy from '../../assets/images/banner-1.png';

export const experiences = {
  toluxjoy: [
    {
      photoSrc: ToluxJoy,
      title: 'Tolu & Joy’s Experience',
      type: 'CUSTOMER',
      text:
        'I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!'
    }
  ]
};

export default function Experience({
  title,
  photoSrc,
  type,
  text,
  children
}) {
  return (
    <>
      <Box
        display="grid"
        gridColumnGap="4rem"
        gridRowGap={{ base: '5rem', md: 0 }}
        gridTemplateColumns={{
          base: '5rem repeat(5,1fr) 5rem',
          md: '10rem repeat(2,1fr) 10rem'
        }}
        gridTemplateRows={{
          base: ' 3rem auto',
          md: '10rem repeat(4,1fr) 10rem'
        }}
        gridColumn="gap-start / -1"
        bg="primary"
        overflowY="hidden"
        gridRowStart={{ base: 3, md: 2 }}>
        {children}
      </Box>
    </>
  );
}
