import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule], // 👈 Add this line

})
export class ProfilePage {

  constructor(private router: Router) {}

  // Logout method
  logout() {
    // You can implement any logout logic here (e.g., clearing session, tokens, etc.)
    console.log('User logged out');

    // Optionally, redirect to the login page after logout
    this.router.navigate(['/login']);
  }
}
