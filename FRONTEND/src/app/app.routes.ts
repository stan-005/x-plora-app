import { Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PasswordResetComponent } from './auth/password-reset/password-reset.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ManageToursComponent } from './admin/manage-tours/manage-tours.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { TourListComponent } from './tours/tour-list/tour-list.component';
import { TourDetailComponent } from './tours/tour-detail/tour-detail.component';
import { TourBookingComponent } from './tours/tour-booking/tour-booking.component';
import { TourReviewComponent } from './tours/tour-review/tour-review.component';

import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', pathMatch: 'prefix', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: PasswordResetComponent },
  { path: 'user', component: UserDashboardComponent, canActivate: [authGuard] },
  { path: 'user/profile', component: UserProfileComponent, canActivate: [authGuard] },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [adminGuard] },
  { path: 'admin/manage-tours', component: ManageToursComponent, canActivate: [adminGuard] },
  { path: 'admin/manage-users', component: ManageUsersComponent, canActivate: [adminGuard] },
  { path: 'tours', component: TourListComponent },
  { path: 'tours/:id', component: TourDetailComponent },
  { path: 'book/:id', component: TourBookingComponent, canActivate: [authGuard] },
  { path: 'review/:id', component: TourReviewComponent, canActivate: [authGuard] }
];
