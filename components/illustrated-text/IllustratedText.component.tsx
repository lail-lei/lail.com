import React from 'react';
import { Subheading } from '../subheading';
import { Icon } from './components';

export interface IllustratedTextProps {
  text: string;
  iconURL?: string;
  altText?: string;
  textStyles?: string;
  subheading?: boolean;
  containerStyles?: string;
  iconSize?: number;
}

const IllustratedText: React.FC<IllustratedTextProps> = ({
  text,
  iconURL,
  altText,
  textStyles,
  containerStyles,
  subheading,
  iconSize,
}) => {
  return (
    <div
      className={`flex
    flex-row
    items-center
    gap-4
    ${containerStyles || ''}
    `}
    >
      {iconURL ? (
        <Icon iconURL={iconURL} altText={altText} iconSize={iconSize} />
      ) : (
        <div className='w-[40px] h-[40px]'></div>
      )}
      {subheading ? (
        <Subheading
          text={text}
          subheadingStyles={`w-3/4 text-left ${textStyles}`}
        />
      ) : (
        <p className={`w-3/4 text-left ${textStyles || ''}`}>{text}</p>
      )}
    </div>
  );
};

export default IllustratedText;
