import React from 'react';
import { IllustratedText } from '../illustrated-text';

export interface ButtonType {
  text: string;
  url?: string;
  onSubmit?: Function;
  buttonStyles?: string;
  disabled?: boolean;
  iconURL?: string;
  iconSize?: number;
  altText?: string;
}

const Button: React.FC<ButtonType> = ({
  text,
  url,
  onSubmit,
  buttonStyles = '',
  iconURL,
  iconSize,
  altText,
  disabled,
}) => {
  const renderButton = () => {
    return (
      <button
        disabled={!!disabled}
        className={`
          hover:drop-shadow-lg
          focus:bg-site-neutral-200 
          font-serif 
          font-black 
          bg-site-neutral-100 
          rounded-lg 
          drop-shadow 
          disabled:opacity-50
          disabled:pointer-events-none
          transition-opacity
          pl-5
          w-full
          h-12 ${buttonStyles}`}
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
