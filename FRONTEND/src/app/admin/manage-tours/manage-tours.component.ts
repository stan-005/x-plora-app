// src/app/manage-tours/manage-tours.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MockTourService } from '../../core/services/mock-tour.service';
import { Tour } from '../../models/tour.model';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-manage-tours',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './manage-tours.component.html',
  styleUrls: ['./manage-tours.component.css'],
})
export class ManageToursComponent implements OnInit {
  tours: Tour[] = [];
  tourForm: FormGroup;
  editMode: boolean = false;
  currentTourId: number | null = null;

  constructor(private fb: FormBuilder, private tourService: MockTourService) {
    this.tourForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.loadTours();
  }

  loadTours(): void {
    this.tourService.getTours().subscribe((tours) => {
      this.tours = tours;
    });
  }

  onSubmit(): void {
    if (this.tourForm.invalid) {
      return;
    }

    const tourData: Tour = this.tourForm.value;

    if (this.editMode && this.currentTourId !== null) {
      tourData.id = this.currentTourId;
      this.tourService.updateTour(tourData);
      this.loadTours();
      this.resetForm();
    } else {
      this.tourService.createTour(tourData);
      this.loadTours();
      this.resetForm();
    }
  }

  onEdit(tour: Tour): void {
    this.editMode = true;
    this.currentTourId = tour.id!;
    this.tourForm.patchValue(tour);
  }

  onDelete(id: number): void {
    this.tourService.deleteTour(id);
    this.loadTours();
  }

  resetForm(): void {
    this.editMode = false;
    this.currentTourId = null;
    this.tourForm.reset();
  }
}
