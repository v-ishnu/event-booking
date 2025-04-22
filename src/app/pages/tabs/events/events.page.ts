import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
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
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class EventsPage {
  constructor(private router: Router) {}

  events: Event[] = [
    {
      id: 1,
      title: 'Summer Music Festival',
      date: '2025-06-15',
      category: 'Music',
      description: 'A vibrant music festival featuring top artists.',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
      price: 50,
      originalPrice: 75,
    },
    {
      id: 2,
      title: 'Tech Conference 2025',
      date: '2025-07-10',
      category: 'Tech',
      description: 'Explore the latest in technology and innovation.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
      price: 200,
      originalPrice: 250,
    },
    {
      id: 3,
      title: 'Marathon City Run',
      date: '2025-08-20',
      category: 'Sports',
      description: 'Join thousands in this annual city marathon.',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
      price: 30,
    },
    {
      id: 4,
      title: 'Jazz Night',
      date: '2025-06-20',
      category: 'Music',
      description: 'An evening of smooth jazz performances.',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
      price: 40,
      originalPrice: 60,
    },
    {
      id: 5,
      title: 'AI Summit',
      date: '2025-09-05',
      category: 'Tech',
      description: 'Discussing the future of artificial intelligence.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
      price: 150,
    },
  ];

  selectedCategory: string = 'All';

  get categories(): string[] {
    return ['All', ...new Set(this.events.map((event) => event.category))];
  }

  get filteredEvents(): Event[] {
    if (this.selectedCategory === 'All') {
      return this.events;
    }
    return this.events.filter((event) => event.category === this.selectedCategory);
  }

  get groupedEvents(): { category: string; events: Event[] }[] {
    const categories = [...new Set(this.filteredEvents.map((event) => event.category))];
    return categories.map((category) => ({
      category,
      events: this.filteredEvents.filter((event) => event.category === category),
    }));
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.detail.value;
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
}
