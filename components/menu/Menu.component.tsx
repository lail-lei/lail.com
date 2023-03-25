import React, { ReactComponentElement } from 'react';
import { ButtonType, Button } from '../button';

interface MenuProps {
  options: Array<ButtonType>;
}

/**
 * Limit of 12 menu items
 */
const Menu: React.FC<MenuProps> = ({ options }) => {
  const createOptions = (): JSX.Element[] => {
    return options.map((option: ButtonType, index: number) => {
      // if option.icon, return icon
      return <Button key={index} {...option} />;
    });
  };

  return (
    <div className={`menu-wrapper grid gap-4 small-laptop:gap-5 grid-cols-1`}>
      {createOptions()}
    </div>
  );
};

export default Menu;
