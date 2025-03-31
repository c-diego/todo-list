import type { PropsWithChildren, ReactNode, ButtonHTMLAttributes } from 'react';
import type { Variant } from './styles';
import { styledButtons } from './styles';

export interface ActionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: Variant;
}

export default function ActionButton({
  startIcon,
  endIcon,
  variant = 'default',
  children,
  ...props
}: PropsWithChildren<ActionButtonProps>) {
  /** Get the button variant */
  const BaseButton = styledButtons[variant];

  return (
    <BaseButton {...props}>
      {startIcon}
      {children}
      {endIcon}
    </BaseButton>
  );
}
