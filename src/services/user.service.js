import HttpStatus from 'http-status-codes';
import User from '../models/user.model';
const bcrypt = require('bcrypt');


//create new user
export const newRegistration = async (body) => {
  var stat;
  console.log(body.email);
  const res = await User.findOne({email: body.email})
  if(res == null ){
  const saltRounds = 10;
  const hashpassword = await bcrypt.hash(body.password, saltRounds);
  body.password = hashpassword;
  const data = await User.create(body);
  console.log(data);
  stat = {
    code: HttpStatus.CREATED,
    data: data,
    message: 'User Registered successfully'
  }
  }else{
    stat = {
      code: HttpStatus.BAD_REQUEST,
      data: "data",
      message: 'User already registered'
    }
  }
  return stat
};




