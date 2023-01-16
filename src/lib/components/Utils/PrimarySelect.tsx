import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  Text,
} from '@chakra-ui/react';
import { FieldError, Path, UseFormRegister } from 'react-hook-form';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

interface FormInputProps<TFormValues extends Record<string, unknown>> {
  name: Path<TFormValues>;
  placeholder: string;
  register: UseFormRegister<TFormValues>;
  required?: boolean;
  validate?: any;
  error: FieldError | undefined;
  label?: string;
  fontSize?: string;
  options: any;
  defaultValue?: any;
  borderColor?: string;
  borderRadius?: string;
  placeholderColor?: string;
}
export const PrimarySelect = <TFormValues extends Record<string, any>>({
  name,
  placeholder,
  register,
  required = false,
  validate = {},
  error,
  label = '',
  fontSize = '1rem',
  options,
  defaultValue,
  placeholderColor,
}: FormInputProps<TFormValues>) => {
  return (
    <FormControl isInvalid={error?.type === 'required'}>
      <Select
        {...register(name, { required, ...validate })}
        w="full"
        border="1px solid"
        borderColor={'brand.100'}
        height="3rem"
        fontSize=".9rem"
        textTransform="capitalize"
        borderRadius="0"
        placeholder={placeholder}
        defaultValue={defaultValue}
        _placeholder={{ color: placeholderColor }}
        // isReadOnly
        icon={<MdOutlineKeyboardArrowDown />}
      >
        {options}
      </Select>
      <FormErrorMessage fontSize=".7rem">
        {(error?.type === 'required' && `${label} is required`) ||
          error?.message}
      </FormErrorMessage>
    </FormControl>
  );
};
