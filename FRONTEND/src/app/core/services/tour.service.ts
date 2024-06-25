import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tour } from '../../models/tour.model';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private tours: Tour[] = [
    { id: 1, title: 'Safari Adventure', description: 'Wildlife Safari Experience', price: 1000 },
    { id: 2, title: 'Mountain Hike', description: 'Mountain Hike on Mt Kenya', price: 2000 },
    { id: 3, title: 'Beach', description: 'Visit Nyali BEach Resort', price: 3000 }
  ];

  getTours(): Observable<Tour[]> {
    return of(this.tours); // Return an Observable of tours
  }

  createTour(tour: Tour): Observable<Tour> {
    tour.id = this.tours.length + 1;
    this.tours.push(tour);
    return of(tour); // Return an Observable of the created tour
  }

  updateTour(tour: Tour): Observable<void> {
    const index = this.tours.findIndex(t => t.id === tour.id);
    if (index !== -1) {
      this.tours[index] = tour;
    }
    return of(undefined); // Return an Observable of void
  }

  deleteTour(id: number): Observable<void> {
    this.tours = this.tours.filter(tour => tour.id !== id);
    return of(undefined); // Return an Observable of void
  }
}