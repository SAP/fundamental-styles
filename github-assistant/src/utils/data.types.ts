export interface Release {
    tag_name: string;
    name: string;
    body: string;
}

export class Message {
    fixes: string[] = [];
    features: string[] = [];
    docs: string[] = [];

    constructor(init?: Partial<Message>) {
        init && Object.assign(this, init);
    }
}

export interface FilteredCommit {
    sha: string;
    url: string;
    message: string;
    prNumber: number | null;
}

export interface GithubCommit {
    author: {};
    comments_url: string;
    commit: {
        message: string;
        url: string;
    };
    commiter: {};
    html_url: string;
    node_id: string;
    parents: {}[];
    sha: string;
    url: string;
}

export interface Pr {
    number: number;
    html_url: string;
}

export interface Hash {
    [details: string]: string;
}
