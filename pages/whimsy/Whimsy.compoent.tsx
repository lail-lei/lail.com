import React from 'react';
import { Page, Card } from '../../components';
import { whimsies } from '../../constants/whimsies';
import { Whimsy } from '../../types';

function Whimsy() {
  const renderWhimsies = () => {
    return whimsies.map((whimsy: Whimsy) => <Card cardStyles='w-full h-1/3' />);
  };
  return (
    <Page pageColor={'site-pink-100'}>
      <div className='whimsy-library p-5 w-full h-full grid grid-cols-3 gap-5 place-items-center'>
        {renderWhimsies()}
      </div>
    </Page>
  );
}

export default Whimsy;
