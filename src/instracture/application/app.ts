import express from 'express';
import bodyParser from 'body-parser';
import { UseCase } from '../../usecase/usecase';

export class App {
    private usecase: UseCase;

    public constructor(usecase: UseCase) {
        this.usecase = usecase;
    }

    Run(port: number) {
        const app = express();
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
        app.post('/', async (req, res, next) => {
            const keyword = req.body.keyword;
            
            try {
                const result = await this.usecase.getTweets(keyword);
                console.log(result);
                return res.json(result);
            } catch(error) {
                next(error);
            }
        });

        app.listen(port, () => {
            console.log('listen: http://localhost:'+ port);
        })
    }
}