const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['video', 'article', 'course'], required: true },
  language: { type: String, required: true },
  difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
  description: { type: String },
  link: { type: String, required: true },
  createdBy: { type: String,
    ref: 'User',
    required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Course', courseSchema);
