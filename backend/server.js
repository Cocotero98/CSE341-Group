const express = require('express')
const mongodb = require('./db/connect')
const app = express()
const port = 8080

//Trying to connect
const connection = require('./db/connect')

app.use('/professional', require('./routes'))
// app.use('/contacts/', require('./routes/contacts'))


mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
  });

// connection.dbConnect().catch(console.error);