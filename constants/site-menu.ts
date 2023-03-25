import { ButtonType } from "../components";

export const siteMenu: Array<ButtonType> = [
    {
        text: 'resume',
        url: './resume',
        buttonStyles: 'text-site-gold',
        iconUrl: '/crocs-icon.png',
        altText: 'crocs icon',
    },
    {
        text: 'whimsy',
        url: './whimsy',
        buttonStyles: 'text-site-pink-200',
        iconUrl: '/star-trek-icon.png',
        altText: 'star trek icon',
    },
    {
        text: 'say hi',
        url: 'https://www.linkedin.com/in/lailei/',
        buttonStyles: 'text-site-blue',
        iconUrl: '/linked-in-icon.png',
        altText: 'linkedin icon',
    },
    {
        text: 'see some code',
        url: 'https://github.com/lail-lei',
        buttonStyles: 'text-site-green-200',
        iconUrl: '/github-icon.png',
        altText: 'github icon',
    }

];