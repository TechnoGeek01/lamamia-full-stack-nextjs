import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: lamamia,
    });
  } catch (err) {
    throw new Error("Error connecting to DB");
  }
};

export default connectDB;
