import React, { ReactNode } from 'react';

interface CardProps {
  children?: ReactNode;
  cardStyles?: string;
  isCollapsable?: boolean;
  collapsed?: boolean;
}

/**
 * Styled component - single column, neutral background
 */
const Card: React.FC<CardProps> = ({ children, cardStyles = '' }) => {
  return (
    <div
      className={`bg-site-neutral-100  ${cardStyles} w-11/12 grid-cols-1 grid place-items-center`}
    >
      {children}
    </div>
  );
};

export default Card;
