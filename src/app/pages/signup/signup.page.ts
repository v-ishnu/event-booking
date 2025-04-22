import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule],
})


export class SignupPage {
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController
  ) {}

  async onSignup(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const { email, password, fullName } = form.value;

    const loading = await this.loadingController.create({
      message: 'Creating account...'
    });
    await loading.present();

    try {
      await this.authService.signUp(email, password, fullName);
      await this.router.navigateByUrl('/home'); // Redirect to home page after signup
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      await loading.dismiss();
    }
  }
}
