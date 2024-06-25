import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../core/services/notification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  message: string | null = null;
  type: 'success' | 'error' | 'info' | null = null;
  display: boolean = false;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.getNotification().subscribe(notification => {
      this.message = notification.message;
      this.type = notification.type;
      this.display = true;
      setTimeout(() => this.display = false, 3000); // Hide after 3 seconds
    });
  }
}
