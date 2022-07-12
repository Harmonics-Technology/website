import type { DeepPartial, Theme } from '@chakra-ui/react';

const Input: DeepPartial<Theme['components']['Input']> = {
  variants: {
    outline: {
      field: {
        borderColor: 'brand.100',
        border: '2px solid',
        backgroundColor: 'white',
        color: '#8B8B8B',
        fontSize: '16px',
        fontWeight: '500',
        borderRadius: '4px',
        h: '3.2rem',
        _focus: {
          borderColor: 'brand.100',
        },
      },
    },
    filled: {
      field: {
        backgroundColor: 'white',
        borderRadius: '5px',
        w: '100%',
        h: '3rem',
      },
    },
  },
};

export default Input;
