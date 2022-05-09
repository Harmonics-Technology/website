import type { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme['colors']['blackAlpha']>
> = {
  brand: {
    50: 'rgba(255, 255, 255, 0.1)',
    100: '#A03CAE',
    200: '#363636',
    300: '#E6E4E4',
    400: '#8B8B8B',
    500: '',
    600: '',
    700: '',
    800: '',
    900: '',
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;
