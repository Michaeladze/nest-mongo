import React, { ReactNode } from 'react';
import './ButtonsGroup.css';
import classNames from 'classnames';

interface IProps {
    children: ReactNode | ReactNode[];
    className?: string;
}

export const ButtonsGroup: React.FC<IProps> = ({ children, className }: IProps) => {

  const rootClass = classNames('ui-buttons-group', className);

  return (
    <div className={rootClass}>
      {children}
    </div>
  );
};
