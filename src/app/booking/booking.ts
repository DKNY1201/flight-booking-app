export class Booking {
    constructor(
        public id: number,
        public itineraryId: number,
        public date: Date,
        public note: string) {
    }
}
