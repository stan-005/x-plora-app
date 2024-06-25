// src/app/core/services/mock-tour.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tour } from '../../models/tour.model';

@Injectable({
  providedIn: 'root',
})
export class MockTourService {
  private toursSubject = new BehaviorSubject<Tour[]>([]);
  private tours: Tour[] = [
    { id: 1, title: 'Tour 1', description: 'Description 1', price: 100 },
    { id: 2, title: 'Tour 2', description: 'Description 2', price: 200 },
  ];

  constructor() {
    this.toursSubject.next(this.tours);
  }

  getTours(): Observable<Tour[]> {
    return this.toursSubject.asObservable();
  }

  createTour(tour: Tour): void {
    tour.id = this.tours.length + 1;
    this.tours.push(tour);
    this.toursSubject.next(this.tours);
  }

  updateTour(tour: Tour): void {
    const index = this.tours.findIndex((t) => t.id === tour.id);
    if (index !== -1) {
      this.tours[index] = tour;
      this.toursSubject.next(this.tours);
    }
  }

  deleteTour(id: number): void {
    this.tours = this.tours.filter((t) => t.id !== id);
    this.toursSubject.next(this.tours);
  }
}
