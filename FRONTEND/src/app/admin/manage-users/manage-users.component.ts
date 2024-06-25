import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';


interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-manage-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl:'./manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.loadUsers();
  }

  // loadUsers(): void {
  //   this.userService.getUsers().pipe(
  //     tap((users: User[]) => {
  //       this.users = users;
  //       this.filteredUsers = users;
  //     })
  //   ).subscribe();
  // }

  filterUsers(): void {
    this.filteredUsers = this.users.filter(user => 
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  editUser(user: User): void {
    // Logic to edit user
    console.log('Edit user:', user);
  }

  // deleteUser(user: User): void {
  //   if (confirm(`Are you sure you want to delete ${user.name}?`)) {
  //     this.userService.deleteUser(user.id).subscribe(() => {
  //       this.loadUsers();
  //     });
  //   }
  // }
  deleteUser(user: User): void {}
  
}