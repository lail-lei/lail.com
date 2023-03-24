import React from "react";
import { ButtonType, Button } from "../button";

interface MenuProps {
    options: Array<MenuOption>;
}

export interface MenuOption extends ButtonType {
    icon?: string;
}

/**
 * Limit of 12 menu items
 */
const Menu: React.FC<MenuProps> = ({ options }) => {

    const createOptions = () => {
        return options.map((option: MenuOption, index: number) => {
            // if option.icon, return icon
            return <Button key={index} {...option} />
        })

    }

    return (

        <div className={`grid cols-${options.length}`}>
            {createOptions()}
        </div>

    );

}

export default Menu;
