import { ButtonHTMLAttributes, forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const baseClassName =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

const variantClassName: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-[0_10px_22px_-12px_rgba(37,99,235,0.8)] hover:brightness-110',
  secondary:
    'border border-slate-600/70 bg-slate-800/70 text-slate-100 hover:border-slate-500 hover:bg-slate-800/95',
  ghost: 'text-slate-200 hover:bg-slate-800/80',
  outline:
    'border border-blue-400/60 bg-transparent text-blue-200 hover:border-blue-300 hover:bg-blue-500/10',
};

const sizeClassName: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
};

export function getButtonClassName({
  variant = 'primary',
  size = 'md',
  className = '',
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return `${baseClassName} ${variantClassName[variant]} ${sizeClassName[size]} ${className}`.trim();
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className = '', variant = 'primary', size = 'md', type = 'button', ...props },
  ref
) {
  const classes = getButtonClassName({ variant, size, className });

  return <button ref={ref} type={type} className={classes} {...props} />;
});

export default Button;