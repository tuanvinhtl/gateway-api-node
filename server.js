const path = require('path');
const gateway = require('express-gateway');
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname + '/public/')));

gateway()
  .load(path.join(__dirname, 'config'))
  .run();
