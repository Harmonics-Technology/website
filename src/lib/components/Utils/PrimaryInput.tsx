import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { FieldError, UseFormRegister, Path } from 'react-hook-form';

interface FormInputProps<TFormValues extends Record<string, unknown>> {
  name: Path<TFormValues>;
  placeholder?: string;
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
  changePasswordType?: any;
  border?: string;
}

export const PrimaryInput = <TFormValues extends Record<string, any>>({
  name,
  required = false,
  type = 'text',
  label = '',
  register,
  validate = {},
  error,
  disableLabel = false,
  placeholder = '',
  defaultValue,
  icon,
  changePasswordType,
  border,
  borderColor,
}: FormInputProps<TFormValues>) => {
  return (
    <FormControl isInvalid={error?.type === 'required'}>
      <InputGroup>
        <Input
          type={type}
          placeholder={placeholder}
          variant="outline"
          {...register(name, { required, ...validate })}
          defaultValue={defaultValue}
          disabled={disableLabel}
          border={border}
          borderColor={borderColor}
        />

        <InputRightElement
          children={icon}
          onClick={changePasswordType}
          fontSize="25px"
        />
      </InputGroup>
      <FormErrorMessage fontSize=".7rem" textTransform="capitalize">
        {(error?.type === 'required' && `${label} is required`) ||
          error?.message}
      </FormErrorMessage>
    </FormControl>
  );
};
