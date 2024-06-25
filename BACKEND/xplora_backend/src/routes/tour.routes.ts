import { Router } from 'express';
import { createTour, getAllTours, getTourById, updateTour, softDeleteTour } from '../controllers/tour.controller';
import isAdmin from '../middleware/isAdmin.middleware';

const tourRouter = Router();

tourRouter.get('/', getAllTours);
tourRouter.post('/:admin', isAdmin, createTour);
tourRouter.get('/:id', getTourById);
tourRouter.put('/:admin/:id', isAdmin, updateTour);
tourRouter.delete('/:admin/:id', isAdmin, softDeleteTour);

export default tourRouter;
