const db = require('../../DB/index.js');
const {Color} = require('../../DB/schema.js');

const postData = async (params) => {
  try {
    await db.collection('colors').insertOne({
      color: params.color,
      text: params.text
    })
  } catch (error) {
    return error;
  }
}

const updateData = async (params) => {
  const filter = {color: params.color};
  const update = {text: params.text};
  const options = {upsert: true};
  try {
    await Color.findOneAndUpdate(filter, update, options)
  } catch (error) {
    return error
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
  updateData,
}