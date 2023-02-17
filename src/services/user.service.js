import User from '../models/user.model';
const bcrypt = require('bcrypt');


//create new user
export const newRegistration = async (body) => {
  const saltRounds = 10;
  const hashpassword = await bcrypt.hash(body.password, saltRounds);
  body.password = hashpassword;
  const data = await User.create(body);
  return data;
};

//user Login

export const userLogin = async (body) => {
  const data = await User.findOne({email: body.email})
  if(data){
    const pswd = await bcrypt.compare(body.password, data.password);
    if (pswd) {
        return data
      } else {
        throw new Error('incorrect password ');
      }
    } else {
      throw new Error('Invalid email');
    }
  };
  


