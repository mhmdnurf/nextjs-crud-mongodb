import mongoose from "mongoose";

const connect = async () => {
  try {
    const uri = process.env.MONGO_URI || "";
    await mongoose.connect(uri);
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed", error);
  }
};

export default connect;
