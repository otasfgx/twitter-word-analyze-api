import {Client} from "twitter-api-sdk";
import {Shaper} from "./shaper";
import {TwitterDataSrc} from "../../../usecase/usecase";
import type {Tweet} from "../../../usecase/usecase";

export class Twitter implements TwitterDataSrc{
    private client: Client;
    private wordShaper: Shaper;
    
    public constructor (BEARER_TOKEN: string){
        this.client = new Client(BEARER_TOKEN as string);
        this.wordShaper = new Shaper();
    }

    async getTweets(keyword: string): Promise<Tweet[]> {
        var result: Tweet[] = [];

        const response = await this.client.tweets.tweetsRecentSearch({
            query: keyword + " -is:retweet",
            max_results: 10
        });

        if(response.data === undefined) {
            result.push( {
                tweet: "Tweet not found"
            });
            return result;
        }
        const tweets = JSON.parse(JSON.stringify(response.data, null, 4));
        
        for (const tweet of tweets) {
            const shapedTweet = this.wordShaper.shape(tweet.text)
            result.push({
                tweet: shapedTweet
            });
        }

        return result;
    }
}