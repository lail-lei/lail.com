import React, { MouseEventHandler, ReactNode } from 'react';

interface CardProps {
  children?: ReactNode;
  cardStyles?: string;
  onClick?: MouseEventHandler;
}

/**
 * Styled component - single column, neutral background
 */
const Card: React.FC<CardProps> = ({ onClick, children, cardStyles = '' }) => {
  return (
    <div
      className={`bg-site-neutral-100  ${cardStyles} w-11/12 grid-cols-1 grid place-items-center`}
      onClick={(event: React.MouseEvent) => {
        if (onClick) onClick(event);
      }}
    >
      {children}
    </div>
  );
};

export default Card;
