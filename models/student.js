const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  course: { type: String, required: true },
  year: { type: Number, required: true }
});

// VERY IMPORTANT — Must be module.exports (NOT exports, NOT module.export)
module.exports = mongoose.model("student", studentSchema);