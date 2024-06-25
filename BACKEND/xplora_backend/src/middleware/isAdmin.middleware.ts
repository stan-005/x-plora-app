import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/user.service';

const userService = new UserService();

export default async function isAdmin(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.params.admin; // Assuming you extract user ID from the request

    const user = await userService.getUserById(userId); // Fetch user details from your data source
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    next();
  } catch (error) {
    console.error('isAdmin middleware error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
