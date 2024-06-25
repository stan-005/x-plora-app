import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AuthPayload } from '../interfaces/auth.interface';
import { v4 } from 'uuid';

require('dotenv').config() 

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET as string;

export class AuthService {
  async register(email: string, password: string, name: string, role: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const id = v4();

    const user = await prisma.user.create({
      data: { id, email, password: hashedPassword, name, role },
    });
    return user;
  }

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
      const payload: AuthPayload = { id: user.id, role: user.role };
      console.log(SECRET);
      const token = jwt.sign(payload, SECRET, { expiresIn: '1h' });
      return { token, userid: user.id, role: user.role, isAdmin: user.role === 'admin'? true : false};
    } else {
      throw new Error('Invalid credentials');
    }
  }
}
