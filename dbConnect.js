import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function conectaNaDatabase() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("A variável de ambiente MONGODB_URI não está definida.");
  }

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  return mongoose.connection;
}

export default conectaNaDatabase;
