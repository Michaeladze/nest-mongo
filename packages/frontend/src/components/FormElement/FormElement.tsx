import React, { ReactNode } from 'react';
import './FormElement.css';

interface IProps {
  children: ReactNode | ReactNode[];
  label?: string;
  optional?: boolean;
  errorMessage?: string;
  icon?: ReactNode;
}

export const FormElement: React.FC<IProps> = ({
  children,
  label,
  optional,
  errorMessage,
  icon
}: IProps) => {

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <div className='ui-form-element'>
      {label && (
        <div className='ui-form-element__label'>
          <span className='text-16'>{label}</span>
          {icon}
          {optional && <span className='ui-form-element__label-optional text-16'>(optional)</span>}
        </div>)}

      <div className='ui-form-element__control'>
        {children}
      </div>
      {errorMessage && <p className='ui-form-element__message text-14'>{errorMessage}</p>}
    </div>
  );
};
