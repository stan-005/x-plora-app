import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class BookingService {
  async createBooking(userId: string, tourId: string) {
    let status = "pending"
    return prisma.booking.create({ data: { userId, tourId, status } });
  }

  async getUserBookings(userId: string) {
    return prisma.booking.findMany({ where: { userId }, include: { tour: true } });
  }

  async getAllBookings() {
    return prisma.booking.findMany({ include: { tour: true } });
  }

  async updateBooking(id: string, status: string) {
    return prisma.booking.update({ where: { id }, data: { status } });
  }
}

