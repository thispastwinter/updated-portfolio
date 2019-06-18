const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const db = require('./models');

// Handlebars
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main'
  })
);
app.set('view engine', 'handlebars');

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);
require('./routes/nodemailerRoutes')(app);

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

let syncOptions = { force: false };

db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
      PORT,
      PORT
    );
  });
});

module.exports = app;