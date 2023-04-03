import React from 'react';
import { Page, WhimsyCard } from '../../components';
import { whimsies } from '../../constants/whimsies';
import { Whimsy } from '../../types';

function Whimsy() {
  const renderWhimsies = () => {
    return whimsies.map((whimsy: Whimsy, index: number) => <WhimsyCard key={index} {...whimsy} cardStyles='w-full h-1/3' />);
  };
  return (
    <Page>
      <div className='whimsy-library p-5 w-full h-full grid small-laptop:grid-cols-3 grid-cols-1 gap-5 place-items-center'>
        {renderWhimsies()}
      </div>
    </Page>
  );
}

export default Whimsy;
