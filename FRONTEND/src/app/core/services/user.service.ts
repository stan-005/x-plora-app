import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers() {
    throw new Error('Method not implemented.');
  }
  deleteUser(id: number) {
    throw new Error('Method not implemented.');
  }
  constructor() {}

  getUserBookings(): Observable<any[]> {
    const mockBookings = [
      { id: 1, tour: 'Safari Adventure', date: '2024-06-20' },
      { id: 2, tour: 'Mountain Hike', date: '2024-07-15' }
    ];
    return of(mockBookings);
  }

  getUserReviews(): Observable<any[]> {
    const mockReviews = [
      { id: 1, tour: 'Safari Adventure', review: 'Amazing experience!' },
      { id: 2, tour: 'Mountain Hike', review: 'Challenging but rewarding.' }
    ];
    return of(mockReviews);
  }
}
