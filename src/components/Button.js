import React from 'react';
import { Button as Btn } from '@chakra-ui/react';

export default React.forwardRef((props, ref) => {
  return <Btn ref={ref} {...props} />;
});
