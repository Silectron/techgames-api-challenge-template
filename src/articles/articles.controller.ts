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
        this.router.get(`${this.path}/:id`, this.getArticleById);
        this.router.put(`${this.path}/:id`, this.modifyArticle);
        this.router.delete(`${this.path}/:id`, this.deleteArticle);
        this.router.post(this.path, this.createArticle);
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

    private modifyArticle = (request: express.Request, response: express.Response) => {
        const id = request.params.id;
        const articleData: Article = request.body;
        this.article.findByIdAndUpdate(id, articleData, { new: true })
            .then((article) => {
                response.send(article);
            });
    }

    private deleteArticle = (request: express.Request, response: express.Response) => {
        const id = request.params.id;
        this.article.findByIdAndDelete(id)
            .then((successResponse) => {
                if (successResponse) {
                    response.send(200);
                } else {
                    response.send(404);
                }
            });
    }
}

export default ArticlesController