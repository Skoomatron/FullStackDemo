const db = require('../../DB/index.js');
const {Color} = require('../../DB/schema.js');

const postData = (params) => {
  try {
    db.collection('colors').insertOne({
      color: params.color,
      text: params.text
    })
  } catch (error) {
    return error;
  }
}

const getData = () => {
  try {
    return Color.find({});
  } catch (error) {
    return error;
  }
}

module.exports = {
  postData,
  getData,
}