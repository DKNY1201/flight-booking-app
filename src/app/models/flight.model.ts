import {Airport} from "./airport.model";

export class Flight {
  constructor(public leavingAirport: Airport,
              public goingAirport: Airport,
              public type: string,
              public hasTV: boolean,
              public hasWifi: boolean,
              public hasCharger: boolean,
              public startDate: string,
              public startTime: number,
              public endDate: string,
              public endTime: number,
              public airlines: number,
              public airlinesLogo: string,
              public price: number) {
  }
}
