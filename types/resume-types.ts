
export interface ResumeCard {
    company: string;
    positions: Array<JobDetails>;
    description: string;
    iconURL: string;
    altText: string,
}

export interface JobDetails {
    title: string;
    date: string;
    iconURL: string,
    altText: string,
    accomplishments: Array<string>;
    tools: Array<string>;
    funFacts?: Array<string>;

}