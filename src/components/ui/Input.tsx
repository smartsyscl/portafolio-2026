import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const fieldBaseClassName =
  'w-full rounded-lg border border-slate-600/70 bg-slate-950/40 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-400 transition-colors outline-none focus:border-blue-400/80 focus:ring-4 focus:ring-blue-500/20';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className = '', ...props },
  ref
) {
  return <input ref={ref} className={`${fieldBaseClassName} ${className}`.trim()} {...props} />;
});

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className = '', ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      className={`${fieldBaseClassName} min-h-28 resize-y ${className}`.trim()}
      {...props}
    />
  );
});

export { Input, Textarea };