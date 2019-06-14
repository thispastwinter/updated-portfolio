const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');


app.use(helmet());
app.use(morgan((tokens, req, res) => [
  tokens.method(req, res),
  tokens.url(req, res),
  tokens.status(req, res),
  tokens.res(req, res, 'content-length'), '-',
  tokens['response-time'](req, res), 'ms',
].join(' ')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

require('./routes/htmlRoutes')(app);
require('./routes/nodemailerRoutes')(app);

const PORT =  process.env.PORT || 8080

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

module.exports = app;