import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

const authService = new AuthService();

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, name, role } = req.body;
    const user = await authService.register(email, password, name, role);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { isAdmin } = req.body;

    const token = await authService.login(email, password);
    res.json(token);
  } catch (error) {
    res.status(401).json({ error: error });
  }
};
