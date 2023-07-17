import React from 'react';
import './TextButton.css';
import { FCC } from '../../utils/types.ts';
import { Button, IButtonBaseProps } from './Button.tsx';

export const TextButton: FCC<IButtonBaseProps> = (props: IButtonBaseProps) => {
  return (
    <Button {...props} spinnerProps={{ variant: 'primary' }} className='ui-button--text'>{props.children}</Button>
  );
};
