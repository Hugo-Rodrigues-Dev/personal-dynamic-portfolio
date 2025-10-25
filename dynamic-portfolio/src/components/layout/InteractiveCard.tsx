import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { useRef } from 'react';

type InteractiveCardProps<T extends ElementType> = {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, 'as'>;

export const InteractiveCard = <T extends ElementType = 'div'>({
  as,
  className,
  children,
  ...props
}: InteractiveCardProps<T>) => {
  const Component = (as ?? 'div') as ElementType;
  const nodeRef = useRef<HTMLElement | null>(null);

  const setNodeRef = (node: HTMLElement | null) => {
    nodeRef.current = node;
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const current = nodeRef.current;
    if (!current) return;

    const rect = current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    current.style.setProperty('--pointer-x', `${x}%`);
    current.style.setProperty('--pointer-y', `${y}%`);
  };

  const handlePointerLeave = () => {
    const current = nodeRef.current;
    if (!current) return;
    current.style.removeProperty('--pointer-x');
    current.style.removeProperty('--pointer-y');
  };

  return (
    <Component
      ref={setNodeRef as (instance: any) => void}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={clsx('interactive-card', className)}
      {...props}
    >
      {children}
    </Component>
  );
};
