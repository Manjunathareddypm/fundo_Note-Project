import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newRegistration = async (req, res, next) => {
    const data = await UserService.newRegistration(req.body);
    res.status(data.code).json({
      code: data.code,
      data: data.data,
      message: data.message
    });
};

/**
 * Controller to login a  user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

export const userLogin = async (req, res, next) => {
  try {
    const data = await UserService.userLogin(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'User Login successfully'
    })
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: 'User Login unsuccessfully'
    })
  }
}

/**
 * Controller to forget password
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

export const forgetPwd = async (req, res, next) => {
  //  try {
    const data = await UserService.forgetPwd(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'User go further'
    })
//   } catch (error) {
//     res.status(HttpStatus.BAD_REQUEST).json({
//       code: HttpStatus.BAD_REQUEST,
//       message: 'error'
//     })
//   }
 }

/**
 * Controller to reset password
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

export const resetPwd = async (req, res, next) => {
  try {
    const data = await UserService.resetPwd(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Password reset successfully'
    })
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: 'unable to reset password'
    })
  }
}

