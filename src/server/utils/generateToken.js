// src/server/utils/generateToken.js

import jwt from 'jsonwebtoken';

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
};

export default generateToken;
