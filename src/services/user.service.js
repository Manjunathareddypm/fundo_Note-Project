import User from '../models/user.model';

//create new user
export const newRegistation = async (body) => {
  const data = await User.create(body);
  return data;
};

