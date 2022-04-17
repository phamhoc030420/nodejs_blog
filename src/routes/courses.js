const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');
// newController.index();
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.post('/handle-form-action', courseController.handleFormAction);
router.post('/handle-trash-action', courseController.handleTrashAction);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.destroy);
router.delete('/:id/force', courseController.forceDestroy);
router.get('/:slug', courseController.show);



module.exports = router;