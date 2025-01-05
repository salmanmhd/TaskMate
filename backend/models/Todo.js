import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  title: String,
  priority: String,
  category: String,
  completed: Boolean,
  subtasks: Array,
  notes: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.model('Todo', todoSchema);
