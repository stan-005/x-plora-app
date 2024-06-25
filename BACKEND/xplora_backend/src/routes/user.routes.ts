import { Router } from 'express';
import { getUser, updateUser } from '../controllers/user.controller';

const userRouter = Router();

userRouter.get('/me/:id', getUser);
userRouter.put('/me/:id', updateUser);

export default userRouter;
