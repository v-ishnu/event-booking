import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  showBottomNav: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Hide bottom nav on these pages
        if (event.url === '/login' || event.url === '/signup' || event.url === '/splash') {
          this.showBottomNav = false;
        } else {
          this.showBottomNav = true;
        }
      }
    });
  }
}
