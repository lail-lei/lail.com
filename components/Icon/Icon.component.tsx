import React, { MouseEventHandler } from 'react';
import Image from 'next/image';

interface IconProps {
  iconURL: string;
  altText: string;
  iconSize?: number;
  iconStyles?: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
}

const Icon: React.FC<IconProps> = ({
  iconStyles,
  iconURL,
  altText,
  iconSize = 40,
  onClick,
}) => {
  return (
    <Image
      className={iconStyles}
      src={iconURL}
      alt={altText}
      width={iconSize}
      height={iconSize}
      onClick={onClick}
    />
  );
};

export default Icon;
