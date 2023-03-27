import React from 'react';
import { ListProps, ResumeList } from '../List';

const TagList: React.FC<ListProps> = ({
  items,
  listItemStyles,
  listStyles,
}) => {
  return (
    <ResumeList
      listStyles={`px-0.5 py-0.5 items-center small-laptop:max-w-1/2 list-none flex flex-row flex-wrap bg-site-neutral-200 rounded p-1 ${listStyles}`}
      listItemStyles={`font-bold w-fit h-[30px] leading-[30px] px-1 bg-site-neutral-100 m-1 rounded ${listItemStyles}`}
      items={items}
    />
  );
};

export default TagList;
