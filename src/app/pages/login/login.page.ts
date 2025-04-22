import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms'; // <-- Add this



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],


})

export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  isLoggingIn = false;

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  async onLogin() {
    if (this.loginForm.invalid || this.isLoggingIn) {
      if (!this.isLoggingIn) {
        await this.presentToast('Please enter valid email and password.', 'danger');
      }
      return;
    }

    this.isLoggingIn = true;

    const { email, password } = this.loginForm.value;

    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      console.log('Login successful:', userCredential.user);
      await this.presentToast('Login successful!', 'success');
      this.loginForm.reset();
      await this.router.navigate(['/home']);
    } catch (error: any) {
      let message = `Login failed: ${error.message}`;
      if (
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/wrong-password' ||
        error.code === 'auth/invalid-credential'
      ) {
        message = 'Invalid email or password.';
      }
      await this.presentToast(message, 'danger');
    } finally {
      this.isLoggingIn = false;
    }
  }

  async presentToast(message: string, color: 'success' | 'danger') {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color,
      position: 'top',
    });
    await toast.present();
  }
}
