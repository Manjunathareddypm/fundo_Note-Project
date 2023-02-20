import HttpStatus from 'http-status-codes';
import User from '../models/user.model';
const bcrypt = require('bcrypt');


//create new user
export const newRegistration = async (body) => {
  const res = await User.findOne({email: body.email})
  if(res == null ){
  const saltRounds = 10;
  const hashpassword = await bcrypt.hash(body.password, saltRounds);
  body.password = hashpassword;
  const data = await User.create(body);
  return data
}
}





