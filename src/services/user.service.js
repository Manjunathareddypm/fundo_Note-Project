import HttpStatus from 'http-status-codes';
import User from '../models/user.model';
const bcrypt = require('bcrypt');


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
      message: 'User alreddy registered'
    }
  }
  return stat
};

////user Login

export const userLogin = async (body) => {
  var check;
  const data = await User.findOne({email: body.email})
  if(data){
    const pswd = await bcrypt.compare(body.password, data.password);
    if (pswd) {
      check = {
        code: HttpStatus.OK,
        data: data,
        message: "Login Succefully" 
      }  
    }
      else {
        check = {
          code: HttpStatus.BAD_REQUEST,
          data: "data",
          message: "incorrect password" 
        }  
      }
    } else {
      check = {
        code: HttpStatus.BAD_REQUEST,
        data: "data",
        message: "user not found" 
      }  
    }
    return check
  }
    

  


