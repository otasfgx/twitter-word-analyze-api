export type Tweet = {
    tweet: string;
}

export interface TwitterDataSrc {
    getTweets(keyword: string): Promise<Tweet[]>
}

export class UseCase {
    private twitterDataSrc: TwitterDataSrc;
    public constructor(twitterDataSrc: TwitterDataSrc) {
        this.twitterDataSrc = twitterDataSrc;
    }

    getTweets(keyword: string) {
        return this.twitterDataSrc.getTweets(keyword);
    }
}