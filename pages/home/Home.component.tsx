import React from 'react';
import { Page, Card, Heading, Menu } from '../../components';
import { siteMenu } from '../../constants';

function Home() {
  return (
    <Page>
      <Card cardStyles='h-5/6'>
        <div className='grid grid-row-1 gap-7 small-laptop:gap-10'>
          <div className='site-title-subtitle grid grid-row-1 gap-4 small-laptop:gap-7'>
            <Heading text={' Lailei Forouraghi'} />
            <h2 className='text-xl small-laptop:text-2xl text-center tracking-widest text-amber-900 font-serif'>
              Software Engineer
            </h2>
          </div>
          <Menu options={siteMenu} />
        </div>
      </Card>
    </Page>
  );
}

export default Home;
