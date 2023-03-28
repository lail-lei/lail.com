import React, { MouseEventHandler } from 'react';
import { Card, IllustratedText } from '../../../../components';
import {
  ResumeCard as ResumeCardType,
  JobDetails as JobDetailsType,
} from '../../types';
import { FunFact } from '../FunFact';
import { ResumeList } from '../List';
import TagList from '../TagList/TagList.component';

export interface ResumeCardProps extends ResumeCardType {
  onClick?: MouseEventHandler;
  cardStyles?: string;
}


const PositionContent: React.FC<JobDetailsType> = ({
  title,
  date,
  iconURL,
  altText,
  accomplishments,
  tools,
  funFacts,
}) => {
  return (
    <div className='grid grid-cols-1 gap-4 mb-10 w-full'>
      <IllustratedText
        text={title}
        iconURL={iconURL}
        altText={altText}
        iconSize={40}
        subheading
      />
      <p className={'text-sm text-left text-amber-900'}>{date}</p>

      <ResumeList
        listStyles={'px-5 py-2 small-laptop:w-3/4'}
        listItemStyles={'mb-2.5 small-laptop:text-base'}
        items={accomplishments}
      />

      <TagList
        items={tools}
      />
      <FunFact funFacts={funFacts} />

    </div>
  );
};

const ResumeCard: React.FC<ResumeCardProps> = ({
  company,
  positions,
  description,
  iconURL,
  altText,
  cardStyles,
  onClick,
}) => {

  const renderAllPositions = (): Array<JSX.Element> => {
    return positions.map((position: JobDetailsType, index: number) => (
      <PositionContent key={index} {...position} />
    ));
  };
  return (
    <Card onClick={onClick} cardStyles={`place-items-start px-5 py-2 ${cardStyles || ''}`}>

      <div className='collapsed-preview h-[70px]'>
        <IllustratedText
          iconURL={iconURL}
          altText={altText}
          iconSize={64}
          text={company}
          textStyles={'text-base font-extrabold w-full'}
          subheading
        />
      </div>

      <p className='text-sm px-2 py-5'>
        {description}
      </p>

      {renderAllPositions()}


    </Card>
  );
};

export default ResumeCard;
