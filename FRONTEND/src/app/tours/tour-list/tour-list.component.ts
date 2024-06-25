import { Component, OnInit } from '@angular/core';
import { TourService } from '../../core/services/tour.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss'],
  standalone: true,
  imports: [CommonModule, NavbarComponent]
})
export class TourListComponent implements OnInit {
  tours: any[] = [];

  constructor(private tourService: TourService) {}

  ngOnInit(): void {
    this.loadTours();
  }

  loadTours(): void {
    this.tourService.getTours().subscribe(tours => {
      this.tours = tours;
    });
  }
  bookTour(tour: any): void {
    // Replace with your logic to handle booking the tour
    console.log(`Booking tour: ${tour.name}`);
    // Add your booking logic here, e.g., navigating to booking page or showing a modal
  }
}
