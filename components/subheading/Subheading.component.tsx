import React from 'react';

interface SubheadingProps {
  text: string;
  subheadingStyles?: string;
}

const Subheading: React.FC<SubheadingProps> = ({
  text,
  subheadingStyles = '',
}) => {
  return (
    <h2
      className={`text-xl small-laptop:text-2xl text-center tracking-widest text-amber-900 font-serif ${subheadingStyles}`}
    >
      {text}
    </h2>
  );
};

export default Subheading;
