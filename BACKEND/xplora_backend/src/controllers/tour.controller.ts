import { Request, Response } from 'express';
import { TourService } from '../services/tour.service';

const tourService = new TourService();

export const createTour = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const tour = await tourService.createTour(data);
    res.json(tour);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const getAllTours = async (req: Request, res: Response) => {
  try {
    const tours = await tourService.getAllTours();
    res.json(tours);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const getTourById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const tour = await tourService.getTourById(id);
    res.json(tour);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const updateTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const tour = await tourService.updateTour(id, data);
    res.json(tour);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const softDeleteTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const tour = await tourService.softDeleteTour(id);
    res.json(tour);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
