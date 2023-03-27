import React from 'react';
import IllustratedText from '../illustrated-text/IllustratedText.component';
//import Image from 'next/image';
//import ButtonIcon from './components/button-icon/ButtonIcon.component';

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
}) => {
  const renderButton = () => {
    return (
      <button
        className={`
          hover:drop-shadow-lg
          focus:bg-site-neutral-200 
          font-serif 
          font-black 
          bg-site-neutral-100 
          rounded-lg 
          drop-shadow 
          pl-5
          w-full
          h-12 ${buttonStyles}`}
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
