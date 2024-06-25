import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class TourService {
  async createTour(data: any) {
    return prisma.tour.create({ data });
  }

  async getAllTours() {
    return prisma.tour.findMany({ where: { isDeleted: false } });
  }

  async getTourById(id: string) {
    return prisma.tour.findUnique({ where: { id } });
  }

  async updateTour(id: string, data: any) {
    return prisma.tour.update({ where: { id }, data });
  }

  async softDeleteTour(id: string) {
    return prisma.tour.update({ where: { id }, data: { isDeleted: true } });
  }
}
