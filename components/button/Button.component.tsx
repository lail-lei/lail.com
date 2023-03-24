import React from "react";

export interface ButtonType {
    text: string;
    url?: string;
    buttonColor?: string;
    textColor?: string;
    onSubmit?: Function;
    buttonStyles?: string
}

function Button<ButtonType>({ text, url, buttonColor, textColor, onSubmit, buttonStyles }) {
    return <div></div>
}

export default Button;
