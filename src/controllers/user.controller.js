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
    next(error)
  }
}
export const getAll = async (req,res) => {
const data = await UserService.getAll()
res.status(HttpStatus.ok).josn({
data: data

})
}


