import React, {
  FC, PropsWithChildren, ReactNode
} from 'react';

export interface IOption {
    id: string;
    text: string;
}

export interface IIconProps {
    icon: ReactNode;
    onClick?: (e?: React.MouseEvent) => void;
    className?: string;
}

export type FCC<P = Record<string, unknown>> = FC<PropsWithChildren<P>>
