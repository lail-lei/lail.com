import React from 'react';
import { Card } from '../../../../components';
import Subheading from '../../../../components/subheading/Subheading.component';
import {
  ResumeCard as ResumeCardType,
  JobDetails as JobDetailsType,
} from '../../types';

export interface ResumeCardProps extends ResumeCardType {
  collapsed?: boolean;
}

const jobTitleStyle = 'text-3xl';
const companyNameStyle = 'text-lg';

const PositionContent: React.FC<JobDetailsType> = ({
  title,
  date,
  iconURL,
  accomplishments,
  tools,
  funFacts,
}) => {
  return <div></div>;
};

const ResumeCard: React.FC<ResumeCardProps> = ({
  company,
  positions,
  description,
  iconURL,
  collapsed,
}) => {
  const mostRecentJobTitle = positions[positions.length - 1].title;
  const hiddenClass = 'h-0 overflow-hidden';
  return (
    <Card>
      <Subheading text={company} subheadingStyles={companyNameStyle} />
      <p className={`${collapsed ? hiddenClass : ''}`}>{description}</p>

      <Subheading text={mostRecentJobTitle} subheadingStyles={jobTitleStyle} />
    </Card>
  );
};

export default ResumeCard;
