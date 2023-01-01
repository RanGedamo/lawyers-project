require('dotenv').config()
require('./DB')
const cors = require('cors');
const express = require('express');
const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req, res) => {
  res.send('hello world')
});

app.listen(process.env.PORT, () => {
  console.log(`listen to port : ${process.env.PORT}`);
})


/* ----------------------------------------------------- */

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
};

/* ----------------------------------------------------- */


