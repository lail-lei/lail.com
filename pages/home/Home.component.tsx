import React from 'react';
import { Page, Card, Heading, Menu } from '../../components';
import Subheading from '../../components/subheading/Subheading.component';
import { siteMenu } from '../../constants';

function Home() {
  return (
    <Page>
      <Card cardStyles='h-5/6'>
        <div className='grid grid-row-1 gap-7 small-laptop:gap-10'>
          <div className='site-title-subtitle grid grid-row-1 gap-4 small-laptop:gap-7'>
            <Heading text={'Lailei Forouraghi'} />
            <Subheading text={'Software Engineer'} />
          </div>
          <Menu options={siteMenu} />
        </div>
      </Card>
    </Page>
  );
}

export default Home;
