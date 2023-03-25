import React from 'react';
import Image from 'next/image';

interface ButtonIconProps {
  iconUrl: string;
  altText: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ iconUrl, altText }) => {
  return <Image src={iconUrl} alt={altText} width={40} height={40} />;
};

export default ButtonIcon;
