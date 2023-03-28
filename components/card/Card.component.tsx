import React, { MouseEventHandler, ReactNode } from 'react';

interface CardProps {
  children?: ReactNode;
  cardStyles?: string;
  centered?: boolean;
  onClick?: MouseEventHandler;
}

/**
 * Styled component - single column, neutral background
 */
const Card: React.FC<CardProps> = ({ onClick, children, centered, cardStyles = '' }) => {
  return (
    <div
      className={`bg-site-neutral-100  ${cardStyles} grid-cols-1 grid ${centered ? 'place-items-center' : 'place-items-start'}`}
      onClick={(event: React.MouseEvent) => {
        if (onClick) onClick(event);
      }}
    >
      {children}
    </div>
  );
};

export default Card;
