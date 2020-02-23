import App from './app';
import ArticlesController from './articles/articles.controller';
import * as mongoose from 'mongoose';
import 'dotenv/config';
import validateEnv from './utils/validateEnv';

validateEnv();

const app = new App(
    [
        new ArticlesController(),
    ],
    3000,
);

app.listen();