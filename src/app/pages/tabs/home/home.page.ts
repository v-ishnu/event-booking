import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Event {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
  price: number;
  originalPrice?: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {

  constructor(private router: Router) {}

  sortOption: string = 'popularity';

  events = [
    {
      name: 'Music Festival',
      slug: 'music-festival',
      status: 'Upcoming',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
      price: 149,
      originalPrice: null,
      rating: 4.6,
    },
    {
      name: 'YouthVibe',
      slug: 'youthvibe',
      status: 'Upcoming',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
      price: 139,
      originalPrice: 149,
      rating: 4.8,
    },
    {
      name: 'SaraDha',
      slug: 'saradha',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1708931247465-24eec679660c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 99,
      originalPrice: 149,
      rating: 4.2,
    },
  ];

  onSortChange(event: any) {
    const value = event.detail.value;

    if (value === 'rating') {
      this.events.sort((a, b) => b.rating - a.rating);
    } else if (value === 'latest') {
      this.events.reverse(); // Simulate latest sort
    } else {
      this.events.sort((a, b) => a.name.localeCompare(b.name)); // Default (alphabetical)
    }
  }

  bookEvent(event: Event) {
    this.router.navigate(['/event-booking'], {
      queryParams: {
        id: event.id,
        name: event.title,
        price: event.price,
      },
    });
  }


goToEvent(slug: string) {
  this.router.navigate(['/event', slug]);
}
}
