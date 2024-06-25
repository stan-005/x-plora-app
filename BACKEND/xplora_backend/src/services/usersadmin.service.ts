import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export class usersadminService {

    async getAllUsers() {
      return prisma.user.findMany();
    }
  
    async updateUserRole(role: string, id: string) {
      return prisma.user.update({ where: { id }, data: { role } });
    }

    async deleteUser(id: string) {
      return prisma.user.delete({ where: { id } });
    }
  }