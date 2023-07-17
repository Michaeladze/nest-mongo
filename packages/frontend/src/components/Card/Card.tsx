import React, { ReactNode } from 'react';
import './Card.css';
import classNames from 'classnames';

interface IProps {
    className?: string;
    children: ReactNode | ReactNode[];
}

export const Card: React.FC<IProps> = ({ children, className }: IProps) => {

  const rootClass = classNames('ui-card', className);

  return (
    <div className={rootClass}>
      { children }
    </div>
  );
};
