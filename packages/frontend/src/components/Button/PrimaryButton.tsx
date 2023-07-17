import React from 'react';
import './PrimaryButton.css';
import { Button, IButtonBaseProps } from './Button.tsx';
import { FCC } from '../../utils/types.ts';

export const PrimaryButton: FCC<IButtonBaseProps> = (props: IButtonBaseProps) => {
  return (
    <Button {...props} className='ui-button--primary'>{props.children}</Button>
  );
};
