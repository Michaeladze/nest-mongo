import React, {
  ReactNode, useRef, useState
} from 'react';
import './Tooltip.css';
import {
  arrow,
  autoUpdate, flip, FloatingArrow, offset, shift, size, useFloating, useFocus, useHover, useInteractions, useRole
} from '@floating-ui/react';

interface IProps {
    anchor: ReactNode;
    content: ReactNode;
}

export const Tooltip: React.FC<IProps> = ({ anchor, content }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const arrowRef = useRef<SVGSVGElement>(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'right',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(8),
      flip(),
      shift(),
      arrow({ element: arrowRef, }),
      size({
        apply({ availableWidth, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            maxWidth: `${Math.min(availableWidth, 300)}px`,
            maxHeight: `${availableHeight}px`,
          });
        },
      })
    ]
  });

  const hover = useHover(context);
  const focus = useFocus(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, role]);

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <div className='ui-tooltip'>
      <button className='ui-tooltip__anchor' ref={refs.setReference} {...getReferenceProps()}>
        {anchor}
      </button>
      {
        isOpen && (
          <div className='ui-tooltip__content' ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
            <FloatingArrow ref={arrowRef} context={context} fill='white' />
            {content}
          </div>
        )
      }
    </div>
  );
};
