import { Request, Response } from 'express';
import { BookingService } from '../services/booking.service';

const bookingService = new BookingService();

export const createBooking = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const { tourId } = req.body;
    const booking = await bookingService.createBooking(userId, tourId);
    res.json(booking);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const getUserBookings = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const bookings = await bookingService.getUserBookings(userId);
    res.json(bookings);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await bookingService.getAllBookings();
    res.json(bookings);
  } catch (error) {
    res.status(400).json({ error: error });
  }
}; 

export const updateBooking = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const booking = await bookingService.updateBooking(id, status);
    res.json(booking);
  } catch (error) {
    res.status(400).json({ error: error });
  }
}
