import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const DATABASE = process.env.DATABASE;
const MONGO_URI = process.env.MONGO_URI;

export default { MONGO_URI, PORT, DATABASE };