import React, { CSSProperties } from 'react';
import './Shimmer.css';
import classNames from 'classnames';

interface IProps {
  className?: string;
  width?: number;
  height?: number;
}

export const Shimmer: React.FC<IProps> = ({ width = 100, height = 16, className }) => {

  const style: CSSProperties = {
    width: `${width}px`,
    height: `${height}px`
  };

  const rootClass = classNames('ui-shimmer', className);

  return (
    <div className={rootClass} style={style}/>
  );
};
