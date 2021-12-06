const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
//initializations
const app = express();

//settings
app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//middlewars
app.use(express.urlencoded({ extended: false }));

//global variables

//routes
app.use(require('./routes/index.routes'));
//static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
