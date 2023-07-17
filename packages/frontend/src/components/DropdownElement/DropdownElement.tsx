import React, { ReactNode } from 'react';
import './DropdownElement.css';
import classNames from 'classnames';

interface IProps {
  text: ReactNode;
  onClick: (e?: React.MouseEvent) => void;
  isActive?: boolean;
}

export const DropdownElement: React.FC<IProps> = ({ text, onClick, isActive }: IProps) => {

  const rootClass = classNames('ui-dropdown-element', isActive && 'ui-dropdown-element--active');
  // -------------------------------------------------------------------------------------------------------------------

  return (
    <div className={rootClass} onClick={onClick}>
      { text }
    </div>
  );
};
