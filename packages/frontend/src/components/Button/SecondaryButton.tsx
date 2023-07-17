import React from 'react';
import './SecondaryButton.css';
import { FCC } from '../../utils/types.ts';
import { Button, IButtonBaseProps } from './Button.tsx';

export const SecondaryButton: FCC<IButtonBaseProps> = (props: IButtonBaseProps) => {
  return (
    <Button {...props} spinnerProps={{ variant: 'primary' }} className='ui-button--secondary'>{props.children}</Button>
  );
};
