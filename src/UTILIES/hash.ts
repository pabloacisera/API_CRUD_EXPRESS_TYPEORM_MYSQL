import bcrypt from 'bcryptjs';

export const createHash = async (password: string) => {
  const salt = await bcrypt.genSalt();
  return bcrypt.hashSync(password, salt);
};

export const compareHash = async (pass: string, cryptPass: string) => {
  return await bcrypt.compareSync(pass, cryptPass);
};
