export class Airport {
  constructor(public iata: string,
              public lon: number,
              public iso: string,
              public status: boolean,
              public name: string,
              public continent: string,
              public type: string,
              public lat: number,
              public size: string) {
  }
}
