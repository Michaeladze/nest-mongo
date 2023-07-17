import React from 'react';
import './Avatar.css';
import classNames from 'classnames';

interface IProps {
  text: string;
  subText?: string;
  size?: 's' | 'm' | 'l';
  showDetails?: boolean;
}

export const Avatar: React.FC<IProps> = ({
  text,
  subText,
  size = 'm',
  showDetails = true
}: IProps) => {

  const rootClass = classNames('ui-avatar', size);

  const initials = text.split(' ').map((word: string) => word[0].toUpperCase()).join('');

  const textClassMap: Record<string, any> = {
    s: {
      initials: 'text-12',
      text: 'text-14',
      subText: 'text-12'
    },
    m: {
      initials: 'text-14',
      text: 'text-16',
      subText: 'text-14'
    },
    l: {
      initials: 'text-16',
      text: 'text-16',
      subText: 'text-12'
    }
  };

  const circleClass = classNames('ui-avatar__circle', textClassMap[size].initials);

  const textClass = classNames(textClassMap[size].text);
  const subTextClass = classNames(textClassMap[size].subText);

  // -------------------------------------------------------------------------------------------------------------------


  return (
    <div className={rootClass}>
      <div className={circleClass}>{initials}</div>
      {
        showDetails && (
          <div className='ui-avatar__details'>
            <div className={textClass}>{text}</div>
            { subText && <div className={subTextClass}>{subText}</div>}
          </div>
        )
      }
    </div>
  );
};
