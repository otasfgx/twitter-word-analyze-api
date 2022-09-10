"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = require("./instracture/application/app");
const twitter_1 = require("./instracture/datasource/tweet/twitter");
const usecase_1 = require("./usecase/usecase");
function main() {
    const twitter = new twitter_1.Twitter(process.env.BEARER_TOKEN);
    const usecase = new usecase_1.UseCase(twitter);
    const app = new app_1.App(usecase);
    const port = process.env.PORT || '3000';
    try {
        app.Run(Number(port));
    }
    catch (e) {
        console.log(e);
    }
}
main();
