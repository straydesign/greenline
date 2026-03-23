import AnimateIn from './AnimateIn';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  dark = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const textColor = dark ? 'text-cream' : 'text-foreground';
  const mutedColor = dark ? 'text-cream/70' : 'text-earth';

  return (
    <div className={`max-w-2xl ${alignClass} mb-12 md:mb-16`}>
      {label && (
        <AnimateIn>
          <span className="mb-3 inline-block font-body text-sm font-semibold uppercase tracking-widest text-sage">
            {label}
          </span>
        </AnimateIn>
      )}
      <AnimateIn delay={0.1}>
        <h2 className={`font-display text-3xl font-bold md:text-4xl lg:text-5xl ${textColor}`}>
          {title}
        </h2>
      </AnimateIn>
      {description && (
        <AnimateIn delay={0.2}>
          <p className={`mt-4 text-lg ${mutedColor}`}>{description}</p>
        </AnimateIn>
      )}
    </div>
  );
}
