import clsx from 'clsx';

type SectionDividerProps = {
  label?: string;
};

export const SectionDivider = ({ label }: SectionDividerProps) => {
  return (
    <div
      className={clsx('section-divider', {
        'section-divider--has-label': Boolean(label)
      })}
      aria-hidden
    >
      {label ? <span>{label}</span> : null}
    </div>
  );
};
