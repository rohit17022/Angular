import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private apiService: ApiService) {}

  onSubmit() {
    const credentials = { username: this.username, password: this.password };
    this.apiService.loginUser(credentials).subscribe(
      (response) => {
        if (response.success) {
          this.message = 'Login successful!';
          console.log('Login successful:', response);
        } else {
          this.message = 'Login failed: ' + response.message;
        }
      },
      (error) => {
        this.message = 'Error: ' + error.error.message;
        console.error('Error logging in:', error);
      }
    );
  }
}