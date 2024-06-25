import { Router } from 'express';
import { createReview, getTourReviews } from '../controllers/review.controller';

const reviewRouter = Router();

reviewRouter.post('/:id', createReview);
reviewRouter.get('/:tourId', getTourReviews);

export default reviewRouter;
