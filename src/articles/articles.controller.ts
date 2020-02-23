import * as express from 'express';
import Article from './article.interface';
import articleModel from './articles.model';

class ArticlesController {
    public path = '/articles';
    public router = express.Router();
    private article = articleModel;

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path, this.getAllArticles);
        this.router.post(this.path, this.createArticle);
        this.router.get(`${this.path}/:id`, this.getArticleById);
    }

    private getAllArticles = (request: express.Request, response: express.Response) => {
        this.article.find()
            .then((articles) => {
                response.send(articles);
            });
    }

    private getArticleById = (request: express.Request, response: express.Response) => {
        const id = request.params.id;
        this.article.findById(id)
            .then((article) => {
                response.send(article);
            });
    }

    private createArticle = (request: express.Request, response: express.Response) => {
        const articleData: Article = request.body;
        const createdArticle = new this.article(articleData);
        createdArticle.save()
            .then((savedArticle) => {
                response.send(savedArticle);
            });
    }
}

export default ArticlesController