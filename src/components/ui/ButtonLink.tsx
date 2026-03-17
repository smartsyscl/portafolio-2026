import { AnchorHTMLAttributes, forwardRef } from 'react';
import { getButtonClassName } from './Button';

type ButtonLinkVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonLinkSize = 'sm' | 'md' | 'lg';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonLinkVariant;
  size?: ButtonLinkSize;
}

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(function ButtonLink(
  { className = '', variant = 'primary', size = 'md', ...props },
  ref
) {
  return (
    <a
      ref={ref}
      className={getButtonClassName({ variant, size, className })}
      {...props}
    />
  );
});

export default ButtonLink;