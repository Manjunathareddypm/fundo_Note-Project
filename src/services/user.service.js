import User from '../models/user.model';

//create new user
export const newRegistration = async (body) => {
  const data = await User.create(body);
  return data;
};

