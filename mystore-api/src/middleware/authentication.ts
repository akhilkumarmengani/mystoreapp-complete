import express from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/config';

const verifyAuthToken = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  try {
    const authorizationHeader: string = req.headers.authorization as string;
    const token: string = authorizationHeader.split(' ')[1];
    jwt.verify(token, config.token_secret as string);
    next();
  } catch (error) {
    res.status(401);
  }
};

export default verifyAuthToken;
