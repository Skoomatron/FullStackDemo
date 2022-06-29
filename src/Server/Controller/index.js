const model = require('../Model/index.js');

const post = (req, res) => {
  model.postData(req.body)
  .then((success) => {
    res.status(201).send();
  })
  .catch((error) => {
    res.status(409).send(error);
  })
}

const get = (req, res) => {
  model.getData()
  .then((data) => {
    res.status(200).send(data);
  })
  .catch((error) => {
    res.status(404).send(error);
  })
}

module.exports = {
  post,
  get,
}