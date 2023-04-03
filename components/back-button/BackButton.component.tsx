import React from 'react';
import { Button } from '../button';

const BackButton: React.FC = () => {
  return (
    <Button
      text='home'
      iconURL='/back-icon.png'
      url='/'
      altText='back arrow'
      iconSize={20}
    />
  );
};

export default BackButton;
