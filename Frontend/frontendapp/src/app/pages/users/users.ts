import { Component } from '@angular/core';
import { ApiService } from '../../services/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {

  users: any[] = [];

  name = '';

  constructor(private api: ApiService) {}

  loadUsers() {
    this.api.get(this.api.usersUrl).subscribe((data: any) => {
      console.log('GET users response:', data);
      this.users = data;
    });
  }

  createUser() {
    const body = {
      name: this.name
    };

    console.log('POST body:', body);

    this.api.post(this.api.usersUrl, body).subscribe(() => {
      this.loadUsers();
      this.name = '';
    });
  }
}