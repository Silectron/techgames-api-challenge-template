import * as mongoose from 'mongoose';
import Post from './article.interface';

const articleSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    body: String,
    author: String
});

const articleModel = mongoose.model<Post & mongoose.Document>('Post', articleSchema);

export default articleModel;