import mongoose, { mongo } from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect("mongodb+srv://3ctjgrupo6:Fiaptech2024@cluster0.pwplit6.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");
  return mongoose.connection;
};

export default conectaNaDatabase;
