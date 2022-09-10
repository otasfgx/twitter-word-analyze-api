"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Twitter = void 0;
const twitter_api_sdk_1 = require("twitter-api-sdk");
const shaper_1 = require("./shaper");
class Twitter {
    constructor(BEARER_TOKEN) {
        this.client = new twitter_api_sdk_1.Client(BEARER_TOKEN);
        this.wordShaper = new shaper_1.Shaper();
    }
    getTweets(keyword) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = [];
            const response = yield this.client.tweets.tweetsRecentSearch({
                query: keyword + " -is:retweet",
                max_results: 10
            });
            if (response.data === undefined) {
                result.push({
                    tweet: "Tweet not found"
                });
                return result;
            }
            const tweets = JSON.parse(JSON.stringify(response.data, null, 4));
            for (const tweet of tweets) {
                const shapedTweet = this.wordShaper.shape(tweet.text);
                result.push({
                    tweet: shapedTweet
                });
            }
            return result;
        });
    }
}
exports.Twitter = Twitter;
