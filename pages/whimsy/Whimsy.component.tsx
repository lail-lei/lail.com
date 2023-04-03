import React from 'react';
import Head from 'next/head'
import { Page, WhimsyCard, Heading, BackButton } from '../../components';
import { whimsies } from '../../constants/whimsies';
import { Whimsy } from '../../types';

function Whimsy() {
  const renderWhimsies = () => {
    return whimsies.map((whimsy: Whimsy, index: number) => <WhimsyCard key={index} {...whimsy} cardStyles='h-full small-laptop:h-2/3' />);
  };
  return (
    <>
      <Head>
        <title>Lailei Forouraghi - Whimsy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Links to various whimsical side projects" />
      </Head>
      <Page pageStyles='gap-10 py-10'>
        <Heading text='Whimsies' />
        <div className='whimsy-library w-11/12 desktop:max-w-[1250px] h-full grid small-laptop:grid-cols-3 grid-cols-1 gap-3 place-items-start'>
          {renderWhimsies()}
        </div>
        <BackButton />
      </Page>
    </>
  );
}

export default Whimsy;
