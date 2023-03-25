import React, { useState } from 'react';
import { Page } from '../../components';
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
        />
      );
    });
  };

  return <Page pageStyles={'auto-rows-max gap-4'}>{renderCards()}</Page>;
}

export default Resume;
