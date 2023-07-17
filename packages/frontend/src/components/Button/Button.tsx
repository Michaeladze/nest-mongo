import React, {
  forwardRef, HTMLProps, ReactNode
} from 'react';
import './Button.css';
import { Spinner } from '../Spinner';
import classNames from 'classnames';
import { ISpinnerProps } from '../Spinner/Spinner.tsx';

export interface IButtonBaseProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  spinner?: boolean;
  spinnerProps?: ISpinnerProps;
}

export const Button: React.FC<IButtonBaseProps> = forwardRef((props: IButtonBaseProps, ref) => {

  const rootClass = classNames(
    'ui-button',
    'text-16',
    props.spinner && 'ui-button--spinner',
    props.className,
    props.disabled && 'ui-button--disabled'
  );

  const nativeProps: IButtonBaseProps = { ...props };
  delete nativeProps.spinner;
  delete nativeProps.spinnerProps;

  return (
    <button {...nativeProps} className={rootClass} ref={ref}>
      <span className='ui-button__text'>{props.children}</span>
      { props.spinner && <Spinner variant={props.spinnerProps?.variant || 'light'} size={props.spinnerProps?.size || 's'}/> }
    </button>
  );
});
