import React, { ReactNode } from 'react';
import './FormSection.css';
import classNames from 'classnames';

interface IProps {
    children: ReactNode | ReactNode[];
    className?: string;
}

export const FormSection: React.FC<IProps> = ({ children, className }: IProps) => {

  const rootClass = classNames('ui-form-section', className);

  return (
    <div className={rootClass}>
      {children}
    </div>
  );
};
