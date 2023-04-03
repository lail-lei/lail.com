import React from 'react';
import { ListProps, ResumeList } from '../list';

const TagList: React.FC<ListProps> = ({
  items,
  listItemStyles,
  listStyles,
}) => {
  return (
    <ResumeList
      listStyles={`w-full px-0.5 py-0.5 items-center min-h-[50px] list-none flex flex-row flex-wrap bg-site-neutral-200 rounded p-1 ${listStyles}`}
      listItemStyles={`text-xs font-bold w-fit h-[30px] leading-[30px] px-1 bg-site-neutral-100 m-1 rounded ${listItemStyles || ''}`}
      items={items}
    />
  );
};

export default TagList;
