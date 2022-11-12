const express = require('express');
const app = express();
const mongoose = require('mongoose');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const routes = require('./routes')
const cors = require('cors');
/// body parse
app.use(express.json())

app.use(cors());
/// sanitize
app.use(xss());
app.use(mongoSanitize());

/// routes
// app.use('/api',routes)

const ads = [
    {title: 'Hello, world (again)!'}
  ];
  const csvFilePath = './server/db.csv'
  const csv = require('csvtojson')
  csv()
      .fromFile(csvFilePath)
      .then((jsonObj) => {
      })

  app.get('/', async(req, res) => {
    const jsonArray = await csv().fromFile(csvFilePath);
    console.log(jsonArray,'tjat')
    res.send(jsonArray);
  });


const port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});