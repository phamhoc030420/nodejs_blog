const newsRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./site');
const meRouter = require('./me');
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


    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);

};
module.exports = route;
