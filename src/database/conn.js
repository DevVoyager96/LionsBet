import mongoose from "mongoose";

const mongoDB = process.env.MONGODB;
const database = process.env.DATABASE;

const main = async () => {
  try {
    await mongoose.connect(process.env.MONGODB + process.env.DATABASE);
    console.log("Conectado com sucesso");
  } catch (error) {
    console.log(error);
  }
};

main();

export default mongoose;