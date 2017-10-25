import { Passenger } from './passenger.model';
import { Card } from './card.model';
import { Billing } from './billing.model';

export class Booking {
    public id: string;
    public userId: string;

    constructor(
        public passenger: Passenger,
        public card: Card,
        public billing: Billing) {
    }
}
