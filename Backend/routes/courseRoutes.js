const express = require('express');
const { getCourses, createCourse, deleteCourse } = require('../controllers/courseController');
const authenticateToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', getCourses);
router.post('/', authenticateToken, createCourse);
router.delete('/:id', authenticateToken, deleteCourse);

module.exports = router;
