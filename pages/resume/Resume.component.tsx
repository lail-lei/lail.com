import React, { useState } from 'react';
import { Heading, Page } from '../../components';
import { resumeCards } from '../../constants';
import ResumeCard from './components/ResumeCard/ResumeCard.component';
import { ResumeCard as ResumeCardType } from './types';

function Resume() {
  const [expandedCardIndex, setExpandedCard] = useState(0);

  const renderCards = () => {
    return resumeCards.map((card: ResumeCardType, index: number) => {
      return (
        <ResumeCard
          key={index}
          {...card}
          collapsed={expandedCardIndex !== index}
          onClick={() => setExpandedCard(index)}
        />
      );
    });
  };

  return (
    <Page pageStyles={'auto-rows-max gap-4'}>
      {
        <div className='grid gap-2 place-items-center pb-10'>
          <Heading text='Resume' headingStyles='my-5' />
          {renderCards()}
        </div>
      }
    </Page>
  );
}

export default Resume;
