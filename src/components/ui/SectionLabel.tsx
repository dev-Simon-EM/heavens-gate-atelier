type SectionLabelProps = {
  children: string;
  tone?: 'light' | 'dark';
};

export default function SectionLabel({ children, tone = 'light' }: SectionLabelProps) {
  const color = tone === 'dark' ? 'text-champagne-300' : 'text-champagne-700';
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${color}`}>{children}</p>
  );
}
