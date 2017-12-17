const PORT = process.env.PORT || 3000;
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const favoritesApi = require( './api/favorites' );
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/api/favorites', favoritesApi);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));

app.listen(PORT, function(){
  console.log(`Node.js is listening to PORT:${PORT}`);
});