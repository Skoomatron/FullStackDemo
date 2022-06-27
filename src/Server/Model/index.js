const db = require('../../DB/index.js');
const {Color} = require('../../DB/schema.js');

const postData = (params) => {
  console.log('Params Inside Model', params)
  try {
    db.collection('color').insertOne({
      color: params.color,
    })
  } catch (error) {
    return error;
  }
}

module.exports = {
  postData,
}