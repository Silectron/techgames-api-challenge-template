import * as express from 'express';
import Article from './article.interface';

class ArticlesController {
    public path = '/articles';
    public router = express.Router();

    private articles: Article[] = [
        {
            title: 'The title',
            subtitle: 'The subtitle',
            body: 'The body of the article',
            author: 'The authors full name'
        }
    ];

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(this.path, this.getAllArticles);
        this.router.post(this.path, this.createAnArticle);
    }

    getAllArticles = (request: express.Request, response: express.Response) => {
        response.send(this.articles);
    }

    createAnArticle = (request: express.Request, response: express.Response) => {
        const article: Article = request.body;
        this.articles.push(article);
        response.send(article);
    }
}

export default ArticlesController