import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ReviewService {
  async createReview(userId: string, tourId: string, rating: number, comment: string) {
    return prisma.review.create({ data: { userId, tourId, rating, comment } });
  }

  async getTourReviews(tourId: string) {
    return prisma.review.findMany({ where: { tourId }, include: { user: true } });
  }
}
