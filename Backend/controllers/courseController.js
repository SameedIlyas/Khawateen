const Course = require('../models/Course');

// Get all courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('createdBy', 'name role');
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses', error });
  }
};

// Create a course
const createCourse = async (req, res) => {
  const creatorId = req.user?.userId;

  if (!creatorId) {
    return res.status(401).json({ message: 'Unauthorized: User not authenticated' });
  }

  const { title, language, difficulty, type, description, link } = req.body;
  if (!title || !language || !difficulty || !type) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // No need to manually set _id, MongoDB will handle it
    const course = new Course({
      title,
      language,
      difficulty,
      type,
      description,
      link,
      createdBy: creatorId,
    });

    await course.save();
    res.status(201).json(course);
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({ message: 'Error creating course', error });
  }
};


// Delete a course
const deleteCourse = async (req, res) => {
  const creatorId  = req.user.userId;
  const { id } = req.params;

  try {
    const course = await Course.findById(id);
    if (!course) return res.status(404).json({ message: 'Course not found' });

    if (course.createdBy.toString() !== creatorId.toString() && user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await Course.findByIdAndDelete(id);
    res.json({ message: 'Course removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting course', error });
  }
};

module.exports = { getCourses, createCourse, deleteCourse };
