import { Schema, model } from 'mongoose';
import jwt from 'jsonwebtoken';

const userSchema = new Schema(
  {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    token:{
      type:String
    }
  },
  {
    timestamps: true,
  })

 


export default model('User', userSchema);
