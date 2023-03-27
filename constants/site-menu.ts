import { ButtonType } from "../components";

export const siteMenu: Array<ButtonType> = [
    {
        text: 'resume',
        url: './resume',
        buttonStyles: 'text-site-gold',
        iconURL: '/crocs-icon.png',
        altText: 'crocs icon',
    },
    {
        text: 'whimsy',
        url: './whimsy',
        buttonStyles: 'text-site-pink-200',
        iconURL: '/star-trek-icon.png',
        altText: 'star trek icon',
    },
    {
        text: 'say hi',
        url: 'https://www.linkedin.com/in/lailei/',
        buttonStyles: 'text-site-blue',
        iconURL: '/linked-in-icon.png',
        altText: 'linkedin icon',
    },
    {
        text: 'see some code',
        url: 'https://github.com/lail-lei',
        buttonStyles: 'text-site-green-200',
        iconURL: '/github-icon.png',
        altText: 'github icon',
    }

];