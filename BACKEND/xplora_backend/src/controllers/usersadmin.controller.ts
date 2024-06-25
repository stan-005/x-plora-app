import { Request, Response } from 'express';
import { usersadminService } from '../services/usersadmin.service';

const usersadminservice = new usersadminService();


export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await usersadminservice.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: error });
  }
}; 

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    const booking = await usersadminservice.updateUserRole(id, role);
    res.json(booking);
  } catch (error) {
    res.status(400).json({ error: error });
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await usersadminservice.deleteUser(id);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error });
  }
}
