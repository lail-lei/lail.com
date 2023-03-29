import React from 'react';
import Head from 'next/head'
import { ResumeCard, Heading, Page } from '../../components';
import CardAccordion from '../../components/card-accordion/CardAccordion.component';
import { resumeCards } from '../../constants';
import { ResumeCard as ResumeCardType } from '../../types';

function Resume() {
  const renderResumeCards = () => {
    return resumeCards.map((card: ResumeCardType, index: number) => <ResumeCard
      key={index}
      {...card}
    />);
  };

  return (
    <>
      <Head>
        <title>Lailei Forouraghi - Resume</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Resume page in portfolio site built with Nextjs + Tailwind. Hosted with AWS Amplify" />
      </Head>
      <Page pageStyles='gap-10 py-10'>
        <Heading text={'Resume'} />
        <CardAccordion width='11/12 desktop:max-w-[1000px]'>{renderResumeCards()}</CardAccordion>
      </Page>
    </>
  );
}


export default Resume;