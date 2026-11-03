import type { ReactNode } from 'react';

export default function Highlight({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`box-decoration-clone py-0.5 ${className}`}>{children}</span>;
}
