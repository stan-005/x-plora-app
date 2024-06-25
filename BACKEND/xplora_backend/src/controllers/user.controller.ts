import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import bcrypt from 'bcryptjs';

const userService = new UserService();
const authService = new AuthService();

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const {name, email, password}= req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const initialUser = await userService.getUserById(req.params.id);

    const currentUser = await userService.updateUser(req.params.id, {name, email, password: hashedPassword});

    console.log(initialUser, currentUser)


    if(email && password){
      let newlogin = await authService.login(email, password)
      console.log(newlogin)
    }
    if (email && !password){
      let newlogin2 = await authService.login(email, initialUser.password)
      console.log(newlogin2)
    }
    if (password && !email){
      let newlogin3 = await authService.login(initialUser.email, password)
      console.log(newlogin3)
    }
    res.json(currentUser);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
