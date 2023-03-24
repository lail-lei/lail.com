import React from "react";

interface HeadingProps {
    text: string;
    headingStyles?: string
}
const Heading : React.FC<HeadingProps> = ({ text, headingStyles = "" }) => {
    return (

        <h1 className={`text-4xl text-center tracking-wider text-amber-700 font-serif underline-offset-8 underline decoration-wavy
           decoration-site-pink ${headingStyles}`}>
            {text}
        </h1>

    );

}

export default Heading;
