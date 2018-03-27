export class User {
  firstName: string;
  lastName: string;
  image: string;
  followers: number;

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
