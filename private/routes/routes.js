const router = require('express').Router();
const controller = require('../controller/controller.js');

router.get('/', (req, res) => {
  res.json({
    status: 200,
    message: 'notes API is working',
  });
});

router.route('/clients').post(controller.createClient);

module.exports = router;
