import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UserService {
  async getUserById(id: string) {
    return prisma.user.findUnique({ where: { id } });
  }

  async updateUser(id: string, data: any) {
    return prisma.user.update({ where: { id }, data });
  }
}
