import React from 'react';
import Image from 'next/image';

interface IconProps {
  iconURL: string;
  altText: string;
  iconSize?: number;
}

const Icon: React.FC<IconProps> = ({ iconURL, altText, iconSize = 40 }) => {
  return (
    <Image src={iconURL} alt={altText} width={iconSize} height={iconSize} />
  );
};

export default Icon;
