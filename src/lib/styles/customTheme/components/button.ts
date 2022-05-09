import type { DeepPartial, Theme } from '@chakra-ui/react';

const Button: DeepPartial<Theme['components']['Button']> = {
  baseStyle: {
    borderRadius: '4px',
  },
  variants: {
    solid: {
      backgroundColor: 'brand.100',
      color: 'white',
      minWidth: '200px',
      height: '55px',
      _hover: {
        backgroundColor: 'brand.100',
      },
    },
    outline: {
      color: 'brand.100',
      borderColor: 'brand.100',
      minWidth: '200px',
      height: '55px',
      _hover: {
        backgroundColor: 'brand.100',
        color: 'white',
      },
    },
  },
};

export default Button;
