import React, { ReactNode } from 'react';
import './Status.css';
import classNames from 'classnames';

interface IProps {
    variant: 'green' | 'yellow' | 'red' | 'blue' | 'gray';
    children: ReactNode | ReactNode[];
}

export const Status: React.FC<IProps> = ({ children, variant }: IProps) => {

  const circleClass = classNames('ui-status__circle', variant);

  return (
    <div className='ui-status'>
      <div className={circleClass}/>
      <span className='ui-status__text text-16'>{children}</span>
    </div>
  );
};
