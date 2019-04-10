const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    headline: {
        type: String,
        required: true,
        unique: { index: {unique: true}}
    },
    link: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;