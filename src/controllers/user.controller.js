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
}




