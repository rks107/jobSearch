const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    rol: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    function: {
      type: String,
      required: true,
    },
    skills: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
