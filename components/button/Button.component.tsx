import React from 'react';
import Image from 'next/image';
import ButtonIcon from './components/button-icon/ButtonIcon.component';

export interface ButtonType {
  text: string;
  url?: string;
  onSubmit?: Function;
  buttonStyles?: string;
  disabled?: boolean;
  iconUrl?: string;
  altText?: string;
}

const Button: React.FC<ButtonType> = ({
  text,
  url,
  onSubmit,
  buttonStyles,
  iconUrl,
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
          flex
          flex-row
          justify-center
          items-center
          gap-4
          w-full
          h-12 ${buttonStyles ? buttonStyles : ''}`}
      >
        {iconUrl && (
          <div className='w-1/6 flex justify-center'>
            <ButtonIcon iconUrl={iconUrl} altText={altText} />{' '}
          </div>
        )}
        <p className='w-3/4 text-left'>{text}</p>
      </button>
    );
  };

  if (!url) {
    return renderButton();
  }

  return <a href={url}>{renderButton()}</a>;
};

export default Button;
