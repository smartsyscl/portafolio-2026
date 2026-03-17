import { HTMLAttributes, LabelHTMLAttributes } from 'react';

export function H2({ className = '', ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={`ui-h2 ${className}`.trim()} {...props} />;
}

export function Body({ className = '', ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={`ui-body ${className}`.trim()} {...props} />;
}

export function Label({ className = '', ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={`ui-label ${className}`.trim()} {...props} />;
}

export function Caption({ className = '', ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={`ui-caption ${className}`.trim()} {...props} />;
}