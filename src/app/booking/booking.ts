export class Booking {
    constructor(
        public id: string,
        public userId: string,
        public date: Date,
        public note: string) {
    }
}
