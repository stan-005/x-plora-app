import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
  

  register(user: {name: string, email: string, password: string, role: string}): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  logout() {
    // Remove user data from localStorage or sessionStorage
    localStorage.removeItem('userToken');
    // Navigate to the login page
    this.router.navigate(['/login']);
  }


  isLoggedIn(): boolean {
    // Implement logic to check if the user is logged in
    return !!localStorage.getItem('token');
  }
}
