import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/splash/splash.module').then((m) => m.SplashPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/tabs/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./pages/tabs/events/events.module').then((m) => m.EventsPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/tabs/profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'event-booking',
    loadChildren: () => import('./pages/event-booking/event-booking.module').then( m => m.EventBookingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
