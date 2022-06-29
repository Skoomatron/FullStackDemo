const mongoose = require('mongoose');
const mongooseURL = 'mongodb://localhost/colorDB';

mongoose.connect(mongooseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MONGO HUNGRY!!');
})
.catch(() => {
  console.log('MONGO SICK!!!')
})

const db = mongoose.connection;

module.exports = db;