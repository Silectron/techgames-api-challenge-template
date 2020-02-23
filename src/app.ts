import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import {Application, Request, Response} from "express";

class App {
    public app: express.Application;
    public port: number;

    constructor(controllers, port) {
        this.app = express();
        this.port = port;

        this.connectToTheDatabase();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }

    private initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }

    private connectToTheDatabase() {
        // const {
        //     MONGO_USER,
        //     MONGO_PASSWORD,
        //     MONGO_PATH,
        // } = process.env;
        //mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`);
        mongoose.connect("mongodb+srv://haihan:harryhurry@haihancluster-i2da4.mongodb.net/test?retryWrites=true&w=majority");
    }
}

export default App;