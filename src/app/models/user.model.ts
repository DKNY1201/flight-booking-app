export class User {
  constructor(public gender: boolean,
              public firstname: string,
              public lastname: string,
              public dayOfBirth: number,
              public monthOfBirth: number,
              public yearOfBirth: number,
              public email: string,
              public password: string) {
  }
}
