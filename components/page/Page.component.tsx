import React, { ReactNode } from "react";

interface PageProps {
    children?: ReactNode;
    pageStyles?: string;
}

/**
 * Styled component - single column, neutral background 
 */
function Page<PageProps>({ children, pageStyles = '' }) {
    return (
        <div className={`bg-site-neutrals-200 h-screen grid-cols-1 grid place-items-center ${pageStyles}`}>
            {children}
        </div>
    );
}

export default Page;
