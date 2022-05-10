import type { DeepPartial, Theme } from '@chakra-ui/react';

const Input: DeepPartial<Theme['components']['Input']> = {
  variants: {
    outline: {
      field: {
        borderColor: 'transparent',
        backgroundColor: 'brand.300',
        color: '#8B8B8B',
        fontSize: '16px',
        fontWeight: '500',
        borderRadius: '4px',
        _focus: {
          borderColor: 'brand.100',
        },
      },
    },
    filled: {
      field: {
        backgroundColor: 'white',
        borderRadius: '5px',
        width: '100%',
        height: '3rem',
      },
    },
  },
};

export default Input;
