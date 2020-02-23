import App from './app';
import ArticlesController from './posts/articles.controller';

const app = new App(
    [
        new ArticlesController(),
    ],
    5000,
);

app.listen();