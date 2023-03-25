
export interface ResumeCard {
    company: string;
    positions: Array<JobDetails>;
    description: string;
    iconURL: string;
}

export interface JobDetails {
    title: string;
    date: string;
    iconURL: string,
    accomplishments: Array<string>;
    tools: Array<string>;
    funFacts?: Array<string>;

}