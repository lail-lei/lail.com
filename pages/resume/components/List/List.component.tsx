import React from 'react';

export interface ListProps {
  items: Array<string>;
  listItemStyles?: string;
  listStyles?: string;
}

const List: React.FC<ListProps> = ({ items, listItemStyles, listStyles }) => {
  const createBulletedList = (): Array<JSX.Element> => {
    return items.map((item: string, index: number) => (
      <li key={index} className={`text-base ${listItemStyles}`}>
        {item}
      </li>
    ));
  };
  return (
    <ul className={`list-disc px-1.5 py-2 ${listStyles}`}>
      {createBulletedList()}
    </ul>
  );
};

export default List;
