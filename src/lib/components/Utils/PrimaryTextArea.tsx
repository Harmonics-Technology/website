import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { FieldError, UseFormRegister, Path } from 'react-hook-form';

interface FormInputProps<TFormValues extends Record<string, unknown>> {
  name: Path<TFormValues>;
  placeholder?: string;
  fontSize?: string;
  label?: string;
  register: UseFormRegister<TFormValues>;
  error: FieldError | undefined;
  type?: string;
  required?: boolean;
  disableLabel?: boolean;
  validate?: any;
  icon?: any;
  variant?: string;
  borderColor?: string;
  borderRadius?: string;
  placeholderColor?: string;
  defaultValue: string | number | undefined;
  format?: string;
  value?: string | number | undefined;
  testId?: string;
  w?: string;
  padding?: string;
  onChange?: any;
  minH?: '250px' | string;
}

export const PrimaryTextArea = <TFormValues extends Record<string, any>>({
  name,
  required = false,
  type = 'text',
  label = '',
  register,
  validate = {},
  error,
  disableLabel = false,
  placeholder = '',
  fontSize,
  defaultValue,
  minH,
}: FormInputProps<TFormValues>) => {
  return (
    <FormControl isInvalid={error?.type === 'required'}>
      <Textarea
        placeholder={placeholder}
        minH={minH}
        resize="none"
        variant="outline"
        {...register(name, { required, ...validate })}
        defaultValue={defaultValue}
        disabled={disableLabel}
        border="2px solid"
        borderColor="brand.100"
      />
      <FormErrorMessage fontSize=".7rem" textTransform="capitalize">
        {(error?.type === 'required' && `${label} is required`) ||
          error?.message}
      </FormErrorMessage>
    </FormControl>
  );
};
