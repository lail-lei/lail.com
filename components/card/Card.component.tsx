import React, { ReactNode } from "react";

interface CardProps {
    children?: ReactNode;
    cardStyles?: string;
}

/**
 * Styled component - single column, neutral background
 */
function Card<CardProps>({ children, cardStyles = "" }) {
    return (
        <div
            className={`bg-site-neutrals-100  ${cardStyles} w-11/12 grid-cols-1 grid place-items-center`}
        >
            {children}
        </div>
    );
}

export default Card;
