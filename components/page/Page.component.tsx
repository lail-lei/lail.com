import React, { ReactNode } from 'react';

interface PageProps {
  children?: ReactNode;
  pageStyles?: string;
  pageColor?: string;
}

/**
 * Styled component - single column, neutral background
 */
const Page: React.FC<PageProps> = ({
  children,
  pageColor,
  pageStyles = '',
}) => {
  const backgroundColorClass = pageColor
    ? `bg-${pageColor}`
    : `bg-site-neutral-200`;

  return (
    <div
      className={`transition-all ${backgroundColorClass} min-h-screen grid-cols-1 grid place-items-center ${pageStyles}`}
    >
      {children}
    </div>
  );
};

export default Page;
