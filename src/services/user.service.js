import HttpStatus from 'http-status-codes';
import User from '../models/user.model';
const bcrypt = require('bcrypt');
import jwt from "jsonwebtoken";
import * as util from '../utils/util';



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
      message: 'User already registered'
    }
  }
  return stat
};

//user Login

export const userLogin = async (body) => {
  var token;
  const data = await User.findOne({email: body.email})
  if(data){
    const pswd = await bcrypt.compare(body.password, data.password);
    if (pswd) {
     token=jwt.sign({EmailId:data.EmailId, id:data._id},
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
  
  // user forget password

  export const forgetPwd = async (body) => {
    var token;
    const data = await User.findOne({email: body.email})
    console.log(data);
      if(data !== null){
       token=jwt.sign({id:data._id, email:data.email },
        process.env.SECRET_KEY);
        util.sendMail(body.email);
        data.token = token
        return data
        } else {
         console.log('invalid email');
        }
    };

    

    // user forget password

  export const resetPwd = async (body) => {
    const saltRounds = 10;
    const hashpassword = await bcrypt.hash(body.password, saltRounds);
    body.password = hashpassword;
    const data = await User.findOneAndUpdate(
      {email:body.email},
      body,
      {
        new: true
      }
    )
    return data

    }
