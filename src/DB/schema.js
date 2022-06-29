const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const colorData = new mongoose.Schema({
  color: String,
  text: String,
})


const Color = mongoose.model('Color', colorData);

module.exports = {Color}