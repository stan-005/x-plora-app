import { Router } from 'express';
import { getAllUsers, updateUser, deleteUser } from '../controllers/usersadmin.controller';
import isAdmin from '../middleware/isAdmin.middleware';

const usersadminRouter = Router();

usersadminRouter.get('/:admin/',  isAdmin, getAllUsers);
usersadminRouter.put('/:admin/:id', isAdmin, updateUser);
usersadminRouter.delete('/:admin/:id', isAdmin, deleteUser);


export default usersadminRouter;
