import React from 'react';
import Head from 'next/head'
import { Page, Card, Heading, Menu } from '../../components';
import Subheading from '../../components/subheading/Subheading.component';
import { siteMenu } from '../../constants';

function Home() {
  return (
    <>
      <Head>
        <title>Lailei Forouraghi - Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Portfolio site built with Nextjs + Tailwind. Hosted with AWS Amplify" />
      </Head>
      <Page>
        <Card centered={true} cardStyles='h-5/6 w-11/12  desktop:max-w-[1000px]'>
          <div className='grid grid-row-1 gap-7 small-laptop:gap-10'>
            <div className='site-title-subtitle grid grid-row-1 gap-4 small-laptop:gap-7'>
              <Heading text={'Lailei Forouraghi'} />
              <Subheading text={'Software Engineer'} />
            </div>
            <Menu options={siteMenu} />
          </div>
        </Card>
      </Page>
    </>

  );
}

export default Home;
