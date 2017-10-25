import {Flight} from "./flight.model";

export class Itinerary {
  constructor(public leavingAirportIata: string,
              public goingAirportIata: string,
              public leavingDate: string,
              public passenger: number,
              public price: number,
              public flights: [Flight]) {
  }
}
