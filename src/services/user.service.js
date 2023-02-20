import HttpStatus from 'http-status-codes';
import User from '../models/user.model';
const bcrypt = require('bcrypt');
import jwt from "jsonwebtoken";


//create new user
export const newRegistration = async (body) => {
  var stat;
  const res = await User.findOne({email: body.email})
  if(res == null ){
  const saltRounds = 10;
  const hashpassword = await bcrypt.hash(body.password, saltRounds);
  body.password = hashpassword;
  const data = await User.create(body);
  stat = {
    code: HttpStatus.CREATED,
    data: data,
    message: 'User Registered successfully'
  }
  }else{
    stat = {
      code: HttpStatus.BAD_REQUEST,
      data: "data",
      message: 'User alredy registered'
    }
  }
  return stat
};

//user Login

export const userLogin = async (body) => {
  const data = await User.findOne({email: body.email})
  if(data){
    const pswd = await bcrypt.compare(body.password, data.password);
    if (pswd) {
      var token=jwt.sign({EmailId:data.EmailId, id:data._id},
      process.env.SECRET_KEY);
      data.token = token
      return data
      } else {
        throw new Error('incorrect password ');
      }
    } else {
      throw new Error('Invalid email');
    }
  };
  

export const getAll = async() => {
  const data = await User.find()
  return data
}
