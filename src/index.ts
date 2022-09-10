import 'dotenv/config'
import { App } from './instracture/application/app';
import { Twitter } from './instracture/datasource/tweet/twitter';
import { UseCase } from './usecase/usecase';

function main() {
    const twitter: Twitter = new Twitter(process.env.BEARER_TOKEN as string);
    const usecase: UseCase = new UseCase(twitter);
    const app : App = new App(usecase);
    const port = process.env.PORT || '3000';
    try {
        app.Run(Number(port));
    } catch (e) {
        console.log(e);
    }
}

main()