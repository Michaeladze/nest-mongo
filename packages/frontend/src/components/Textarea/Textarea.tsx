import React, {
  HTMLProps, useCallback, useState
} from 'react';
import './Textarea.css';
import { debounce } from '../../utils/debounce.ts';

type IProps = HTMLProps<HTMLTextAreaElement>;

export const Textarea: React.FC<IProps> = (props: IProps) => {

  const [length, setLength] = useState<number>(0);

  const debouncedSetLength = useCallback(debounce((length: number) => {
    setLength(length);
  }), [setLength]);

  const onLocalChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    debouncedSetLength(e.target.value.length);
    props.onChange && props.onChange(e);
  }, [debouncedSetLength]);

  // -------------------------------------------------------------------------------------------------------------------


  return (
    <div className='ui-textarea'>
      <textarea {...props} className='ui-textarea__textarea' onChange={onLocalChange}/>
      {props.maxLength && <div className='ui-textarea__length text-12'>{length}/{props.maxLength}</div>}
    </div>
  );
};
