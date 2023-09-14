// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080; 

// Middleware
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() =>{
    console.log('Connected to mongodb');
})

require('./app/routes')(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
