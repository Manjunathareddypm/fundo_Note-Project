import express from 'express';
const router = express.Router();

import userRoute from './user.route';

import noteRoute from './note.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.use('/users', userRoute);
  
//notes
  router.use('/note', noteRoute);

  return router;
};

export default routes;
