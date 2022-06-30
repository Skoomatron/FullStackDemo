const router = require('express').Router();
const controller = require('./Controller/index.js');

console.log('In The Router')

router.post('/addColor', controller.post)
router.post('/updateColor', controller.update)
router.get('/getColors', controller.get)


module.exports = router;