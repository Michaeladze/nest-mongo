import React, { forwardRef, HTMLProps } from 'react';
import './Input.css';
import classNames from 'classnames';
import { IIconProps } from '../../utils/types.ts';
import { Spinner } from '../Spinner';

export interface IInputProps extends HTMLProps<HTMLInputElement> {
  iconProps?: IIconProps;
  spinner?: boolean;
}

export const Input: React.FC<IInputProps> = forwardRef((props: IInputProps, ref) => {

  const rootClass = classNames('ui-input', props.disabled && 'ui-input--disabled');
  const inputClass = classNames(
    'ui-input__input',
    props.iconProps && 'ui-input--withIcon',
    props.spinner && 'ui-input--withSpinner'
  );

  const nativeProps: IInputProps = { ...props };
  delete nativeProps.iconProps;
  delete nativeProps.spinner;

  const iconClass = classNames(
    'ui-input__icon',
    props.iconProps?.className,
    props.iconProps?.onClick && 'ui-input__icon--clickable'
  );

  const iconJSX = props.iconProps && (
    <div className={iconClass} onClick={props.iconProps.onClick}>
      {props.iconProps.icon}
    </div>
  );

  const spinnerJSX = !props.disabled && props.spinner && (
    <div className='ui-input__spinner'>
      <div className='ui-input__spinner-inner'>
        <Spinner size='s'/>
      </div>
    </div>
  );

  return (
    <div className={rootClass}>
      <input {...nativeProps} ref={ref} type='text' className={inputClass}/>
      {iconJSX}
      {spinnerJSX}
    </div>
  );
});
