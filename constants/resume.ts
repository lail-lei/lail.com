import { ResumeCard as ResumeCardType } from "../pages/resume/types";

export const resumeCards: Array<ResumeCardType> = [
    {

        company: `IKEA`,
        description: 'the famed Swedish meatball, shark plushie, and furniture store',
        iconURL: '',
        positions: [
            {
                title: 'Software Engineer',
                date: 'Feb 2022 - present',
                iconURL: '',
                accomplishments: [
                    'Co-team lead on zone picking application. Built sophisticated mobile FE (React.JS and Capacitor) over 6 months',
                    'Wrote algorithms for optimizing pick path in IKEA stores.',
                    'Provided mentorship to other engineers on React.js and Redux best practices. Taught other devs git commands and practices.',
                    'Built micro frontends for customer facing website.',
                    'Facilitated conversation/collaboration between international teams',
                    'Created system design documents and wrote documentation.',
                    'Built node.js micro service (in GCP).',
                    'Built multi-page A/B tests involving dynamically rendered elements',
                ],
                funFacts: ['some stores have better meatballs than others', 'I wear blue and yellow crocs for special IKEA occasions'],
                tools: ['react.js', 'typescript', 'redux', 'capacitor (by ionic)', 'node.js', 'express.js', 'google cloud platform', 'gcp cloud functions', 'gcp api gateway', 'firestore', 'optimizely', 'google analytics'],
            }
        ]

    },

    {

        company: `St Joseph's University`,
        description: 'Philadelphia-based private university',
        iconURL: '',
        positions: [
            {
                title: 'Graduate Teaching Assistant',
                date: 'Aug 2020 - Dec 2021',
                iconURL: '',
                accomplishments: ['Led weekly recitation sessions for undergraduate-level Object-Oriented Design and Data Structures.',
                    'Led weekly open labs available to all undergraduate computer science students.', 'Graded homework, labs, and quizzes'],
                funFacts: ['Between classes, I finetuned GPT-2 to generate realistic cupcake recipes (this was well before ChatGPT)',
                    'I also built out several Node.js microservices - including a sophisticate search and recommendation engine based on Elasticsearch'],
                tools: ['pytorch', 'gpt-2', 'huggingface', 'elasticsearch', 'python', 'node.js', 'express.js', 'react.js', 'redux', 'mongodb', 'mysql'],
            }
        ]

    },

    {
        company: 'Viddler',
        description: 'A SAAS startup specializing in video marketing software',
        iconURL: '',
        positions: [
            {
                title: 'UI Developer',
                date: 'December 2018 - March 2020',
                iconURL: '',
                accomplishments: ['Coded prototypes of video-editing and rewards-store applications.'],
                tools: ['react.js'],
                funFacts: ['juggled work while beginning master degree'],
            },
            {
                title: 'Web Developer',
                date: 'April 2018 - December 2018',
                iconURL: '',
                accomplishments: ['Built marketing site.',
                    'Built tools + experiences for trade shows'],
                tools: ['vanilla javascript', 'css/scss', 'html', 'wordpress'],
                funFacts: ['Created a shiba-inu-themed web tool that ranked trade show attendees social media prescence. Included fuzzy search when looking up client names.']
            }
        ]

    },




];