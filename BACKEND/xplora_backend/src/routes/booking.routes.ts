import { Router } from 'express';
import { createBooking, getUserBookings, getAllBookings, updateBooking } from '../controllers/booking.controller';

const bookingRouter = Router();

bookingRouter.get('/', getAllBookings);
bookingRouter.post('/:id', createBooking);
bookingRouter.put('/:id', updateBooking);
bookingRouter.get('/:id', getUserBookings);

export default bookingRouter;
