import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // ✅ Required for ngForm
import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';
import { SignupPage } from './signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,        // ✅ Make sure this is imported
    IonicModule,
    SignupPageRoutingModule,
    SignupPage
  ],
  // declarations: [SignupPage]
})
export class SignupPageModule { }
