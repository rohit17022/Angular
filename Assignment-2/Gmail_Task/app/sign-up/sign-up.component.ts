import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  message: string = '';

  constructor(private apiService: ApiService) {}

  onSubmit() {
    const user = { email: this.email, username: this.username, password: this.password };
    this.apiService.registerUser(user).subscribe(
      (response) => {
        this.message = 'Registration successful!';
        console.log('User registered successfully:', response);
      },
      (error) => {
        this.message = 'Error: ' + error.error.message;
        console.error('Error registering user:', error);
      }
    );
  }
}