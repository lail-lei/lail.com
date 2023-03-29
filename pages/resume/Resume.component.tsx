import React, { useState } from 'react';
import { Card, Heading, Page } from '../../components';
import CardAccordion from '../../components/card-accordion/CardAccordion.component';
import { resumeCards } from '../../constants';
import ResumeCard from './components/ResumeCard/ResumeCard.component';
import { ResumeCard as ResumeCardType } from './types';

function Resume() {
  const renderResumeCards = () => {
    return resumeCards.map((card: ResumeCardType, index: number) => <ResumeCard
      key={index}
      {...card}
    />);
  };

  return (
    <Page pageStyles='gap-10 py-10'>
      <Heading text={'Resume'} />
      <CardAccordion width='11/12 desktop:max-w-[1000px]'>{renderResumeCards()}</CardAccordion>
    </Page>
  );
}


export default Resume;