import React, { useState, useRef, useEffect } from 'react';
import { Button, Subheading } from '../../../../components';

const FunFact: React.FC<{
  funFacts: Array<string>;
  styles?: string;
}> = ({ funFacts, styles = '' }) => {
  const [factIndex, setFactIndex] = useState<null | number>(null);
  const disabled = factIndex !== null && funFacts.length === 1;

  const ref = useRef(null);

  useEffect(() => {
    let scrollTimer: ReturnType<typeof setTimeout> = setTimeout(() => {
      if (factIndex !== null) scrollToRef();
    }, 50);

    return () => clearTimeout(scrollTimer);
  }, [factIndex]);

  const scrollToRef = () => {
    if (!ref.current) return;
    ref.current.scrollIntoView({
      inline: 'nearest',
      behavior: 'smooth',
    });
  };

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
      className='grid gap-0.5 small-laptop:gap-1 grid-row w-full h-full'
      ref={ref}
    >
      <Button
        text={
          disabled
            ? `out of fun facts :/`
            : `generate fun fact about my time here`
        }
        buttonStyles={`w-full px-3 text-sm self-center mb-2 text-site-pink-200 ${styles}`}
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
        subheadingStyles={`w-full h-full text-black text-sm bg-site-pink-100 ${
          factIndex === null ? '' : 'p-2'
        } rounded`}
      />
    </div>
  );
};

export default FunFact;
