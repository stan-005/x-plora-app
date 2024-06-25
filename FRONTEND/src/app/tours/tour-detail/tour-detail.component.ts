import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-tour-detail',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './tour-detail.component.html',
  styleUrl: './tour-detail.component.css'
})
export class TourDetailComponent {
tour: any;
bookTour(arg0: any) {
throw new Error('Method not implemented.');
}

}
