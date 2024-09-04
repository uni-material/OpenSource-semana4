export class Developer {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    //cadena de texto y trim elimina espacios en blanco
    return `${this._firstName} ${this.lastName}`.trim();
  }




}
