import React, {
  ReactNode, useRef, useState
} from 'react';
import './Menu.css';
import { IOption } from '../../utils/types.ts';
import {
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  size, useClick, useDismiss,
  useFloating,
  useInteractions, useRole
} from '@floating-ui/react';
import { DropdownElement } from '../DropdownElement';

interface IProps {
  anchor: ReactNode;
  options: IOption[];
  onChange: (option: IOption) => void;
  onRenderOption?: (option: IOption) => ReactNode;
}

export const Menu: React.FC<IProps> = ({ anchor, options, onChange, onRenderOption }: IProps) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const arrowRef = useRef<SVGSVGElement>(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(8),
      flip(),
      shift(),
      arrow({ element: arrowRef, }),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, { minWidth: `${rects.reference.width}px` });
        }
      })
    ]
  });

  const click = useClick(context);
  const role = useRole(context);
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

  // -------------------------------------------------------------------------------------------------------------------

  const onOptionClick = (option: IOption) => {
    return () => {
      onChange(option);
      setIsOpen(false);
    };
  };

  const optionsJSX = options.map((option: IOption) => {
    if (onRenderOption) {
      return onRenderOption(option);
    }

    return <DropdownElement key={option.id} text={option.text} onClick={onOptionClick(option)} />;
  });

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <div className='ui-menu'>
      <button className='ui-menu__anchor' ref={refs.setReference} {...getReferenceProps()}>
        {anchor}
      </button>
      {
        isOpen && (
          <div className='ui-menu__content' ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
            {optionsJSX}
          </div>
        )
      }
    </div>
  );
};
