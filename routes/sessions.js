const express = require('express');
const router = express.Router();

const sessionsController = require('../controllers/sessions');

/* GET home page. */
router.get('/', sessionsController.index);

router.get('/new', sessionsController.new);

router.post('/', sessionsController.create);

router.delete('/:id', sessionsController.delete);

router.get('/:id/edit', sessionsController.edit);

router.put('/:id/edit', sessionsController.update);

router.get('/resources', function(req, res, next) {
    res.render('resources', { title: 'Resources' });
  });
  
module.exports = router;
