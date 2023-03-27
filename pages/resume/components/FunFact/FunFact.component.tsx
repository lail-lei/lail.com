import React from 'react';
import { Button, IllustratedText, Subheading } from '../../../../components';

const FunFact: React.FC<{
  funFacts: Array<string>;
  styles: string;
}> = ({ funFacts, styles }) => {
  return (
    <>
      <Button
        text={`fun fact about my time here`}
        buttonStyles={`px-3 text-sm self-center mb-5 text-site-pink-200 ${styles}`}
        iconURL={'/fun-fact-icon.png'}
        iconSize={25}
      />
      <div>
        <Subheading
          text={funFacts[Math.floor(Math.random() * funFacts.length)]}
        />
      </div>
    </>
  );
};

export default FunFact;
