import React from 'react';
import { IllustratedText } from '../illustrated-text';

export interface ButtonType {
  text: string;
  url?: string;
  onSubmit?: Function;
  buttonColor?: string;
  disabled?: boolean;
  iconURL?: string;
  iconSize?: number;
  altText?: string;
}

const Button: React.FC<ButtonType> = ({
  text,
  url,
  onSubmit,
  buttonColor = '',
  iconURL,
  iconSize,
  altText,
  disabled,
}) => {
  const renderButton = () => {

    const textColor = buttonColor ? `text-${buttonColor}` : 'text-black';
    return (
      <button
        disabled={!!disabled}
        className={`
          focus:bg-site-neutral-200 
          bg-site-neutral-100 
          rounded-lg 
          drop-shadow 
          disabled:opacity-50
          disabled:pointer-events-none
          transition-opacity
          z-[1]
          pl-5
          w-full
          h-12
          font-serif 
          font-bold
          ${textColor}
          hover:drop-shadow-xl
          transform-gpu
          `}
        onClick={() => {
          if (onSubmit) onSubmit();
        }}
      >
        <IllustratedText
          iconSize={iconSize}
          iconURL={iconURL}
          text={text}
          altText={altText}
        />
      </button>
    );
  };

  if (!url) {
    return renderButton();
  }

  return <a href={url}>{renderButton()}</a>;
};

export default Button;
