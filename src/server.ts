import App from './app';
import ArticlesController from './posts/articles.controller';

const app = new App(
    [
        new ArticlesController(),
    ],
    3000,
);

app.listen();