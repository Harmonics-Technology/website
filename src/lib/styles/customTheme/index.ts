import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import Button from './components/button';
import Input from './components/input';
// import fonts from "./fonts";

const customTheme = extendTheme({
  // fonts,
  fonts: {
    brBold: 'BR Firma Bold, san-serif',
    brEbold: 'BR Firma ExtraBold, san-serif',
    brRegular: 'BR Firma Regular, san-serif',
    brSemi: 'BR Firma SemiBold, san-serif',
    brMid: 'BR Firma Medium, san-serif',
    body: '"DM Sans", serif',
  },
  colors,
  components: {
    Button,
    Input,
  },
});

export default customTheme;
