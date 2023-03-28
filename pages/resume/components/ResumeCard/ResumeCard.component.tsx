import React from 'react';
import { Card, IllustratedText } from '../../../../components';
import {
  ResumeCard as ResumeCardType,
  JobDetails as JobDetailsType,
} from '../../types';
import { FunFact } from '../FunFact';
import { ResumeList } from '../List';
import TagList from '../TagList/TagList.component';

export interface ResumeCardProps extends ResumeCardType {
  collapsed?: boolean;
}

const companyNameStyle = 'text-base font-extrabold';

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
    <div
      className={
        'flex flex-col gap-1.5 w-full h-full bg-site-neutral-100 small-laptop:px-5'
      }
    >
      <IllustratedText
        text={title}
        iconURL={iconURL}
        altText={altText}
        iconSize={50}
        textStyles={'text-sm font-bold'}
      />
      <p className={'text-sm text-left text-amber-900'}>{date}</p>

      <ResumeList
        listStyles={'px-5 py-2 small-laptop:w-3/4'}
        listItemStyles={'mb-2.5 small-laptop:text-base'}
        items={accomplishments}
      />
      <div className='flex flex-col gap-5 small-laptop:flex-row'>
        <TagList
          items={tools}
          listStyles={'small-laptop:w-1/2 small-laptop:mb-5'}
        />
        <FunFact funFacts={funFacts} />
      </div>
    </div>
  );
};

const ResumeCard: React.FC<ResumeCardProps> = ({
  company,
  positions,
  description,
  iconURL,
  altText,
  collapsed,
}) => {
  const mostRecentJobTitle = positions[positions.length - 1].title;
  const hiddenClass = 'h-0 overflow-hidden p-0 m-0 border-y-0';
  const renderAllPositions = (): Array<JSX.Element> => {
    return positions.map((position: JobDetailsType, index: number) => (
      <PositionContent key={index} {...position} />
    ));
  };
  return (
    <Card>
      <div
        className={'w-full py-2.5 px-5 flex flex-col small-laptop:gap-4 gap-2'}
      >
        <IllustratedText
          iconURL={iconURL}
          altText={altText}
          iconSize={64}
          text={company}
          textStyles={companyNameStyle}
          subheading
        />

        <p className={`${collapsed ? hiddenClass : ''} text-sm pl-5`}>
          {description}
        </p>
        <div className={`bg-site-neutral-300 ${collapsed ? hiddenClass : ''}`}>
          {!collapsed && renderAllPositions()}
        </div>
      </div>
    </Card>
  );
};

export default ResumeCard;
