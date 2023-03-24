import React from "react";
import { ButtonType, Button } from "../button";

interface MenuProps {
    options: Array<MenuOption>;
}

export interface MenuOption extends ButtonType {
    icon?: string;
    text: string;
    url?: string;
    buttonColor?: string;
    textColor?: string;
    onSubmit?: Function;
    buttonStyles?: string
}

/**
 * Limit of 12 menu items
 */
function Menu<MenuProps>({ options }) {

    const createOptions = () => {
        return options.map((option: MenuOption, index: number) => {
            // if option.icon, return icon
            //  return <Button key={index} {...option} />
        })

    }

    return (

        <div className={`grid cols-${options.length}`}>
            {createOptions()}
        </div>

    );

}

export default Menu;
