import { Schema, model } from 'mongoose';
const bcrypt = require('bcrypt');

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
  },
  {
    timestamps: true
  }
);

userSchema.pre('save', async function(next){
  try {
   const salt = await bcrypt.genSalt(10)
   const hashedPassword = await bcrypt.hash(this.password,salt)
   this.password = hashedPassword
   next()
  } catch (error) {
    next(error)
  }
})

export default model('User', userSchema);
