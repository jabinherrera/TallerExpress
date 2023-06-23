import express from 'express';
import userRoutes from './routes/user.routes.js';
import productRoutes from './routes/product.routes.js';
import cors from 'cors';
import envs from './configs/enviroments.js';
import connect from './configs/mongo.js';
import dotenv from 'dotenv';

const {PORT} = envs;

const app = express();

app.use(dotenv.config());
app.use(cors());
app.use(express.json());

app.use('', userRoutes);
app.use('', productRoutes);

console.log('Connecting to database...');
connect()
  .then(() => {
    console.log('Mongo connected successful');
    app.listen(PORT, async () => {
      console.log(`Server is running on PORT: 3000`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(-1);
  });