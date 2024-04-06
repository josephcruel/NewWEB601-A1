const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb+srv://josephcruel:UkwKD5LJ9yLIWp12@calories.ifsfwtg.mongodb.net/?retryWrites=true&w=majority')

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
    const articles = await Article.find()
    res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(5000)