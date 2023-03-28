import { ResumeCard as ResumeCardType } from "../pages/resume/types";

export const resumeCards: Array<ResumeCardType> = [
    {

        company: `IKEA`,
        description: 'the famed Swedish meatball, shark plushie, and furniture store',
        iconURL: '/ikea-icon.png',
        altText: 'cute Ikea icon',
        positions: [
            {
                title: 'Software Engineer - Fulfillment',
                date: 'Feb 2022 - present',
                iconURL: '/crocs-icon.png',
                altText: 'blue and yellow crocs',
                accomplishments: [
                    'Lead frontend engineer on zone-picking application. Led team of four FE/FS engineers',
                    'Provided mentorship to teammates on React.js and Redux best practices.',
                    'Built sophisticated mobile FE (React.js and Ionic Capacitor.js) over 6 months.',
                    'Wrote algorithms to optimize coworker pick path in IKEA stores.',
                    'Collaborated with BE/FS engineers on REST API design.'
                ],
                funFacts: ['I like to wear IKEA blue and yellow crocs to the office.'],
                tools: ['react.js', 'typescript', 'redux', 'capacitor (by ionic)', 'google analytics'],
            },
            {
                title: 'Software Engineer - CX',
                date: 'Feb 2022 - present',
                iconURL: '',
                altText: '',
                accomplishments: [
                    'Built performant micro-frontends for customer facing website.',
                    'Built Node.js micro service (in GCP).',
                    'Built sophisticated multi-page A/B tests, altering dynamically-rendered components (Optimizely).',
                    'Built micro-frontends for customer facing website.',
                    'Facilitated collaboration between international teams.',
                    'Created system design documents and wrote documentation.',
                ],
                funFacts: [],
                tools: ['react.js', 'typescript', 'node.js', 'express.js', 'google cloud platform', 'gcp cloud functions', 'gcp api gateway', 'firestore', 'optimizely', 'google analytics'],
            }
        ]

    },

    {

        company: `St Joseph's University`,
        description: 'Philadelphia-based private university',
        iconURL: '/graduation-cap-icon.png',
        altText: 'graduation cap',
        positions: [
            {
                title: 'Graduate Teaching Assistant',
                date: 'Aug 2020 - Dec 2021',
                iconURL: '/r2d2-icon.png',
                altText: 'r2d2',
                accomplishments: ['Led weekly recitation sessions for undergraduate-level Object-Oriented Design and Data Structures.',
                    'Led weekly open labs available to all undergraduate computer science students.', 'Graded homework, labs, and quizzes'],
                funFacts: ['Between classes, I finetuned GPT-2 to generate realistic cupcake recipes (this was well before ChatGPT)',
                    'Among other microservices, I built a recommendation engine based on Elasticsearch.'],
                tools: ['pytorch', 'jupyter notebook', 'gpt-2', 'huggingface', 'elasticsearch', 'python', 'node.js', 'express.js', 'react.js', 'redux', 'mongodb', 'mysql', 'aws (s3)'],
            }
        ]

    },

    {

        company: `Viddler`,
        description: 'A SAAS startup specializing in video marketing software',
        iconURL: '/viddler-icon.png',
        altText: 'video software icon',
        positions: [
            {
                title: 'UI Developer',
                date: 'December 2018 - March 2020',
                iconURL: '',
                altText: '',
                accomplishments: ['Coded prototypes of video-editing and rewards-store applications.'],
                funFacts: [],
                tools: ['react.js', 'css', 'styled-components'],
            },
            {
                title: 'Web Developer',
                date: 'April 2018 - December 2018',
                iconURL: '/shiba-icon.png',
                altText: 'winking shiba inu',
                accomplishments: ['Built marketing site.',
                    'Built tools + web experiences for trade shows'],
                tools: ['vanilla javascript', 'css/scss', 'html'],
                funFacts: ['Created a shiba-inu-themed web tool that ranked trade show attendees\' social media prescence. Included fuzzy search.']
            },
        ]

    },

];