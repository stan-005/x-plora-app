import { Request, Response } from 'express';
import { ReviewService } from '../services/review.service';

const reviewService = new ReviewService();

export const createReview = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const { tourId, rating, comment } = req.body;
    const review = await reviewService.createReview(userId, tourId, rating, comment);
    res.json(review);
  } catch (error) {
    res.status(400).json({ error: error});
  }
};

export const getTourReviews = async (req: Request, res: Response) => {
  try {
    const tourId = req.params.tourId
    const reviews = await reviewService.getTourReviews(tourId);
    res.json(reviews);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
