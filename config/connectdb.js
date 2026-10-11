const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://belaidsara2696_db_user:xsmGZQBYgdKGTa8a@ac-vugoyou-shard-00-00.5bquqpf.mongodb.net:27017,ac-vugoyou-shard-00-01.5bquqpf.mongodb.net:27017,ac-vugoyou-shard-00-02.5bquqpf.mongodb.net:27017/?ssl=true&replicaSet=atlas-6of18x-shard-0&authSource=admin&appName=Cluster0",
    );
    console.log("Database is connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
