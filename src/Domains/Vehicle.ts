// import ICar from '../Interfaces/ICar';
// import IMotorcycle from '../Interfaces/IMotorcycle';

import IVehicle from '../Interfaces/IVehicle';

export default abstract class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number; 

  constructor({
    id,
    model,
    year,
    color,
    status,
    buyValue }: IVehicle) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status || false;
    this.buyValue = buyValue;
  }

  // public setId(id: string) {
  //   this.id = id;
  // }

  // public get Id() {
  //   return this.id;
  // }
  // public setModel(value: string) {
  //   this.model = value;
  // }

  // public getModel() {
  //   return this.model;
  // }
  // public setYear(value: number) {
  //   this.year = value;
  // }

  // public getYear() {
  //   return this.year;
  // }
  // public setColor(value: string) {
  //   this.color = value;
  // }

  // public getColor() {
  //   return this.color;
  // }
  // public setStatus(value: boolean) {
  //   this.status = value;
  // }

  // public getStatus() {
  //   return this.status;
  // }
  // public setBuyValue(value: number) {
  //   this.buyValue = value;
  // }

  // public getBuyValue() {
  //   return this.buyValue;
  // }
}