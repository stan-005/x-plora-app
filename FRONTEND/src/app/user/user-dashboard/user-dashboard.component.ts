import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterOutlet]
})
export class UserDashboardComponent implements OnInit {
  bookings: any[] = [];
  reviews: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUserBookings();
    this.loadUserReviews();
  }

  loadUserBookings(): void {
    this.userService.getUserBookings().subscribe(bookings => {
      this.bookings = bookings;
    });
  }

  loadUserReviews(): void {
    this.userService.getUserReviews().subscribe(reviews => {
      this.reviews = reviews;
    });
  }
}
