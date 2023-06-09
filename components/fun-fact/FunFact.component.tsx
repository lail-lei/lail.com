import React, { useState } from 'react';
import { Button, Subheading } from '..';

const FunFact: React.FC<{
  funFacts: Array<string>;
  styles?: string;
}> = ({ funFacts, styles = '' }) => {
  const [factIndex, setFactIndex] = useState<null | number>(null);
  const disabled = factIndex !== null && funFacts.length === 1;

  const getRandomNextFactIndex = () => {
    let newIndex: number = Math.floor(Math.random() * funFacts.length);
    if (factIndex === null) return newIndex;
    while (funFacts.length > 1 && newIndex === factIndex) {
      newIndex = Math.floor(Math.random() * funFacts.length);
    }
    return newIndex;
  };

  if (funFacts.length === 0) return <></>;
  return (
    <div
      className='grid grid-rows-1 gap-5'
    >
      <Button
        text={
          disabled
            ? `out of fun facts :/`
            : `generate fun fact about my time here`
        }
        iconURL={'/fun-fact-icon.png'}
        altText={'fun fact icon'}
        iconSize={25}
        disabled={disabled}
        onSubmit={() => {
          const next = getRandomNextFactIndex();
          setFactIndex(next);
        }}
      />
      <Subheading
        text={funFacts[factIndex]}
        size='sm'
        subheadingStyles={`w-full h-full text-black text-sm bg-site-pink-100 ${factIndex === null ? '' : 'p-2'
          } rounded`}
      />
    </div>
  );
};

export default FunFact;
