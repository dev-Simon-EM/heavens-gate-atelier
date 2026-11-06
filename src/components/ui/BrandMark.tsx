const LOGO_SRC = '/Luxury_Heavens_Gate_Atelier_Logo.png';
const LOGO_SIZE = 1072;

type BrandMarkProps = {
  variant?: 'mark' | 'full';
  className?: string;
};

export default function BrandMark({ variant = 'mark', className = '' }: BrandMarkProps) {
  if (variant === 'full') {
    return (
      <img
        src={LOGO_SRC}
        alt="Heavens Gate Atelier logo"
        width={LOGO_SIZE}
        height={LOGO_SIZE}
        decoding="async"
        className={className}
      />
    );
  }

  return (
    <span className={`relative block overflow-hidden ${className}`} aria-hidden="true">
      <img
        src={LOGO_SRC}
        alt=""
        width={LOGO_SIZE}
        height={LOGO_SIZE}
        decoding="async"
        className="absolute max-w-none"
        style={{ width: '178.67%', left: '-39.5%', top: '-11.67%' }}
      />
    </span>
  );
}
