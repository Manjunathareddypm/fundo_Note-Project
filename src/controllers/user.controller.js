import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newRegistration = async (req, res, next) => {
  try {
    const data = await UserService.newRegistration(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User Registered successfully'
    });
  } catch (error) {
    next(error);
  }
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
    next(error)
  }
}



