import React, { MouseEventHandler } from 'react';
import { Button, Card, IllustratedText, Subheading } from '..';
import {
    Whimsy as WhimsyType
} from '../../types';


export interface WhimsyCardType extends WhimsyType {
    cardStyles?: string;
}

const WhimsyCard: React.FC<WhimsyCardType> = ({
    url,
    title,
    iconURL,
    description,
    disabled,
    cardStyles,
}) => {


    return (
        <Card cardStyles={`place-items-start px-5 py-2 ${cardStyles || ''}`}>
            <IllustratedText iconURL={iconURL} text={title} subheading containerStyles='w-full' />
            <p>{description}</p>
            <Button url={url} text={disabled ? 'Coming Soon' : 'Go'} disabled />
        </Card>
    );
};

export default WhimsyCard;
