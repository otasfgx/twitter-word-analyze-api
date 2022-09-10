"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCase = void 0;
class UseCase {
    constructor(twitterDataSrc) {
        this.twitterDataSrc = twitterDataSrc;
    }
    getTweets(keyword) {
        return this.twitterDataSrc.getTweets(keyword);
    }
}
exports.UseCase = UseCase;
