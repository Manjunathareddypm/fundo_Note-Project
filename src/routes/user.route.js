import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import { authorization } from '../middlewares/auth.middleware';


const router = express.Router();

//route to create a new user
router.post('', newUserValidator, userController.newRegistration);

//route to login
router.post('/login', userController.userLogin);

// route for forget password
router.post('/forgetPwd', userController.forgetPwd);

//route for reset password

router.post('/resetPwd', authorization,  userController.resetPwd)


export default router;