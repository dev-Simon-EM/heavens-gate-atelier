import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'light';

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
};

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-ink-900 text-ivory-50 hover:bg-champagne-700 focus-visible:outline-champagne-600',
  secondary:
    'border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-ivory-50 focus-visible:outline-ink-900',
  light:
    'bg-ivory-100 text-ink-900 hover:bg-champagne-200 focus-visible:outline-champagne-300',
};

export default function ButtonLink({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
