import mongoose from 'mongoose';
import environments from './enviroments.js';

function connect() {
  console.log(environments.DATABASE);
  return mongoose.connect(environments.DATABASE);
}

export default connect;