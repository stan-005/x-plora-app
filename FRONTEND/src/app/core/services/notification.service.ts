import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Notification {
  message: string;
  type: 'success' | 'error' | 'info';
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new BehaviorSubject<Notification>({ message: '', type: 'info' });

  notify(message: string, type: 'success' | 'error' | 'info' = 'info'): void {
    this.notificationSubject.next({ message, type });
  }

  getNotification(): Observable<Notification> {
    return this.notificationSubject.asObservable();
  }
}
