import React, { useState } from 'react';
import './Select.css';
import { IIconProps, IOption } from '../../utils/types.ts';
import { IInputProps, Input } from '../Input/Input.tsx';
import {
  autoUpdate,
  flip, FloatingFocusManager, FloatingPortal,
  offset,
  shift,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole
} from '@floating-ui/react';
import { DropdownElement } from '../DropdownElement';
import classNames from 'classnames';
import { ChevronUp } from '../../assets/icons/ChevronUp.tsx';

interface IProps {
  options: IOption[];
  value: IOption;
  inputProps?: IInputProps;
  onChange?: (option: IOption) => void;
}

export const Select: React.FC<IProps> = ({ options, inputProps, onChange, value }: IProps) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  // -------------------------------------------------------------------------------------------------------------------

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(4),
      flip(),
      shift(),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, { minWidth: `${rects.reference.width}px` });
        }
      })
    ],
  });

  const click = useClick(context);
  const role = useRole(context);
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

  // -------------------------------------------------------------------------------------------------------------------

  const onLocalChange = (option: IOption) => {
    return () => {
      setIsOpen(false);
      onChange && onChange(option);
    };
  };

  const filteredOptionsJSX = options.map((o: IOption) => {
    const isActive = false;
    return <DropdownElement key={o.id} onClick={onLocalChange(o)} text={o.text} isActive={isActive} />;
  });

  // -------------------------------------------------------------------------------------------------------------------

  const iconClass = classNames('ui-select__icon', isOpen && 'ui-select__icon--rotate');

  const iconProps: IIconProps = {
    icon: <ChevronUp />,
    className: iconClass
  };

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <div className='ui-select'>
      <div className='ui-select__anchor' ref={refs.setReference} {...getReferenceProps()}>
        <Input {...inputProps}
          readOnly
          value={value?.text}
          iconProps={iconProps}
        />
      </div>
      {
        isOpen && (
          <FloatingPortal>
            <FloatingFocusManager context={context} modal={false}>
              <div className='ui-select__dropdown'
                ref={refs.setFloating}
                style={floatingStyles}
                {...getFloatingProps()}
              >{filteredOptionsJSX}</div>
            </FloatingFocusManager>
          </FloatingPortal>
        )
      }
    </div>
  );
};
