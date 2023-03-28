import React from 'react';

interface SubheadingProps {
  text: string;
  subheadingStyles?: string;
  size?: string;
}

const Subheading: React.FC<SubheadingProps> = ({
  text,
  subheadingStyles,
  size,
}) => {
  const textSize = size ? `text-[${size}]` : 'text-2xl';
  return (
    <h2
      className={`${textSize} tracking-widest text-amber-900 font-serif ${subheadingStyles}`}
    >
      {text}
    </h2>
  );
};

export default Subheading;
