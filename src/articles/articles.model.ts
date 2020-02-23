import * as mongoose from 'mongoose';
import Article from './article.interface';

const articleSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    body: String,
    author: String
});

const articleModel = mongoose.model<Article & mongoose.Document>('Article', articleSchema);

export default articleModel;