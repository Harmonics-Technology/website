import {
    FormControl,
    VStack,
    FormLabel,
    Input,
    Text,
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
    iconClass?: string | undefined;
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
    fontSize,
    defaultValue,
    iconClass,
    changePasswordType,
    border,
    borderColor,
  }: FormInputProps<TFormValues>) => {
    return (
      <FormControl>
        <VStack alignItems='flex-start' w='full' >
            <FormLabel
            htmlFor={label}
            textTransform="capitalize"
            color='#000'
            >
            {label}
            </FormLabel>
    
            <Input
                type={type}
                placeholder={placeholder}
                variant="outline"
                {...register(name, { required, ...validate })}
                defaultValue={defaultValue}
                disabled={disableLabel}
                border="1px solid black"
                borderColor="#000"
                background="#fff !important"
                size="lg"
                color="#000"
            />
    
            <Text fontSize=".7rem" color="red">
            {(error?.type === 'required' && `${label} is required`) ||
                error?.message}
            </Text>
        </VStack>
      </FormControl>
    );
  };
  