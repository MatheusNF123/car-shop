import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor({
    id,
    model,
    year,
    color,
    status,
    buyValue,
    doorsQty,
    seatsQty }: ICar) {
    super({ id, model, year, color, status, buyValue });
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }

  // public setDoorsQty(value: number) {
  //   this.doorsQty = value;
  // }

  // public getDoorsQty() {
  //   return this.doorsQty;
  // }
  // public setSeatsQty(value: number) {
  //   this.seatsQty = value;
  // }

  // public getSeatsQty() {
  //   return this.seatsQty;
  // }
}

// export default class Car {
//   protected id: string | undefined;
//   protected model: string;
//   protected year: number;
//   protected color: string;
//   protected status: boolean;
//   protected buyValue: number; 
//   private doorsQty: number;
//   private seatsQty: number;

//   constructor({
//     id,
//     model,
//     year,
//     color,
//     status,
//     buyValue,
//     doorsQty,
//     seatsQty }: ICar) {
//     this.id = id;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.status = status || false;
//     this.buyValue = buyValue;
//     this.doorsQty = doorsQty;
//     this.seatsQty = seatsQty;
//   }

//   public setId(id: string) {
//     this.id = id;
//   }

//   public getId() {
//     return this.id;
//   }
//   public setModel(value: string) {
//     this.model = value;
//   }

//   public getModel() {
//     return this.model;
//   }
//   public setYear(value: number) {
//     this.year = value;
//   }

//   public getYear() {
//     return this.year;
//   }
//   public setColor(value: string) {
//     this.color = value;
//   }

//   public getColor() {
//     return this.color;
//   }
//   public setStatus(value: boolean) {
//     this.status = value;
//   }

//   public getStatus() {
//     return this.status;
//   }
//   public setBuyValue(value: number) {
//     this.buyValue = value;
//   }

//   public getBuyValue() {
//     return this.buyValue;
//   }
//   public setDoorsQty(value: number) {
//     this.doorsQty = value;
//   }

//   public getDoorsQty() {
//     return this.doorsQty;
//   }
//   public setSeatsQty(value: number) {
//     this.seatsQty = value;
//   }

//   public getSeatsQty() {
//     return this.seatsQty;
//   }
// }