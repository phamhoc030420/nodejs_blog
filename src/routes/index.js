const newsRouter = require('./news');
const siteRouter = require('./site');
const route = (app) => {
    // app.get('/', (req, res) => {
    //     res.render('home');
    // });

    // app.get('/news', (req, res) => {
    //     res.render('news');
    // });=>
    app.use('/news', newsRouter);
    // app.get('/search', (req, res) => {
    //     res.render('search');
    // });

    app.use('/', siteRouter);
};
module.exports = route;
