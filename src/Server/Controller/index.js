const model = require('../Model/index.js');

const post = (req, res) => {
  console.log("Request Inside Controller", req.body)
  model.postData(req.body)
  .then((success) => {
    res.status(201).send();
  })
  .catch((error) => {
    res.status(409).send(error);
  })
}

module.exports = {
  post,
}