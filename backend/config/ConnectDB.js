const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Todo_App";
    await mongoose.connect(mongoURI);
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

connectDB();
