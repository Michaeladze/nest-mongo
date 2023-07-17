import React, { HTMLProps } from 'react';
import './Radio.css';
import classNames from 'classnames';
import { IOption } from '../../utils/types.ts';

interface IProps extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
  option?: IOption;
  onChange?: (option: IOption, e?: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio: React.FC<IProps> = (props: IProps) => {

  const rootClass = classNames(
    'ui-radio',
    props.disabled && 'ui-radio--disabled'
  );

  const localChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    props.onChange && props.onChange(props.option, e);
  };

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <label className={rootClass}>
      <input
        {...props}
        type='radio'
        className='ui-radio__input'
        value={props.option?.id || props.value}
        onChange={localChange}
      />

      <span className='ui-radio__check'>
        <span className='ui-radio__mark' />
      </span>

      <div className='ui-radio__label text-16' tabIndex={-1}>{props.option?.text || props.label}</div>
    </label>
  );
};
