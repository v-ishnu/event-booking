import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-booking',
  templateUrl: './event-booking.page.html',
  styleUrls: ['./event-booking.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class EventBookingPage implements OnInit {
  eventName: string = '';
  price: number = 0;
  ticketCount: number = 1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.eventName = params['name'];
      this.price = +params['price'];
    });
  }

  increaseCount() {
    this.ticketCount++;
  }

  decreaseCount() {
    if (this.ticketCount > 1) this.ticketCount--;
  }

  getTotalPrice(): number {
    return this.ticketCount * this.price;
  }
}
