import React, { HTMLProps } from 'react';
import './Checkbox.css';
import { Check } from '../../assets/icons/Check.tsx';
import classNames from 'classnames';
import { IOption } from '../../utils/types.ts';

interface IProps extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
    option?: IOption;
    onChange?: (option: IOption, e?: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<IProps> = (props: IProps) => {

  const rootClass = classNames(
    'ui-checkbox',
    props.disabled && 'ui-checkbox--disabled'
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
        type='checkbox'
        className='ui-checkbox__input'
        value={props.option?.id || props.value}
        onChange={localChange}
      />

      <span className='ui-checkbox__check'>
        <span className='ui-checkbox__mark'>
          <Check />
        </span>
      </span>

      <div className='ui-checkbox__label text-16' tabIndex={-1}>{props.option?.text || props.label}</div>
    </label>
  );
};
