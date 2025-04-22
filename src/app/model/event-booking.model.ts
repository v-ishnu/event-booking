export class EventBookingModel {
    eventId: string;
    eventName: string;
    ticketCount: number;
    ticketPrice: number;

    constructor(eventId: string, eventName: string, ticketPrice: number, ticketCount = 1) {
      this.eventId = eventId;
      this.eventName = eventName;
      this.ticketPrice = ticketPrice;
      this.ticketCount = ticketCount;
    }

    increaseCount(): void {
      this.ticketCount++;
    }

    decreaseCount(): void {
      if (this.ticketCount > 1) {
        this.ticketCount--;
      }
    }

    getTotalPrice(): number {
      return this.ticketCount * this.ticketPrice;
    }
  }
