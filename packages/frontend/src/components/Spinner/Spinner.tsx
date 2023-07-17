import React from 'react';
import './Spinner.css';
import classNames from 'classnames';

export interface ISpinnerProps {
  size?: 's' | 'm' | 'l';
  variant?: 'primary' | 'light';
}

export const Spinner: React.FC<ISpinnerProps> = ({ size = 'm', variant = 'primary' }: ISpinnerProps) => {

  const rootClass = classNames('ui-spinner', size);
  const innerClass = classNames('ui-spinner__inner', variant);

  return (
    <div className={rootClass}>
      <div className={innerClass}/>
    </div>
  );
};
