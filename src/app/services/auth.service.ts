import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  async signUp(email: string, password: string, fullName: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  async updateProfile(displayName: string, photoURL?: string) {
    const user = await this.afAuth.currentUser;
    return user?.updateProfile({ displayName, photoURL });
  }

  getErrorMessage(error: any): string {
    switch (error.code) {
      case 'auth/email-already-in-use':
        return 'This email is already registered.';
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters.';
      case 'auth/operation-not-allowed':
        return 'Email/password accounts are not enabled.';
      default:
        return 'An unknown error occurred. Please try again.';
    }
  }
}
