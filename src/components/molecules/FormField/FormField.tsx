import React from 'react';
import { Wrapper } from './FormField.styles';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';

interface props {
  label: string;
  type?: string;
  placeholder?: string;
}

const getCapitalVersionOf = (string: string) => {
  return `${string.charAt(0).toUpperCase()}${string.substr(1, string.length - 1)}`;
};

const FormField = React.forwardRef<HTMLInputElement, props>(({ label, type = 'text', placeholder = '', ...rest }, ref) => {
  return (
    <Wrapper>
      <Label htmlFor={label}>{getCapitalVersionOf(label)}</Label>
      <Input id={label} type={type} placeholder={placeholder} ref={ref} {...rest} />
    </Wrapper>
  );
});

export default FormField;
