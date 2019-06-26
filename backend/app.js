const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();
const db = require('./connection')


db.authenticate()
  .then(() => console.log('Database conneted..'))
  .catch(err => console.log('Error' + err))

app.get('/', (req, res) => res.send('INDEX'));

const PORT = process.env.PORT || 5000

// Hotels routes
app.use('/hoteles', require('./routes/hotels'));

app.listen(PORT, console.log(`Listening on port ${PORT}`));