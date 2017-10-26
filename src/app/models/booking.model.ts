import { Passenger } from './passenger.model';
import { Card } from './card.model';
import { Billing } from './billing.model';

export class Booking {
    public _id: string;
    public userId: string;
    public itineraryId: string;
    public departure: string;
    public departureDate: string;
    public departureTime: string;
    public arrival: string;
    public arrivalDate: string;
    public arrivalTime: string;
    public confirmationCode: string;

    constructor(
        public passenger: Passenger,
        public card: Card,
        public billing: Billing) {
    }
}
