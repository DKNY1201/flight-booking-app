export class User {
  constructor(public gender: boolean,
              public firstName: string,
              public lastName: string,
              public dayOfBirth: number,
              public monthOfBirth: number,
              public yearOfBirth: number,
              public email: string,
              public password: string) {
  }
}
