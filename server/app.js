const { join } = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');

const router = require('./controllers');

const app = express();

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: join(__dirname, 'views', 'layouts'),
    partialsDir: join(__dirname, 'views', 'partials'),
    defaultlayout: 'main',
  }),
);

app.set('port', process.env.PORT || 5040);
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser());

app.use(router);

module.exports = app;
