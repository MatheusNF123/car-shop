import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor({
    id,
    model,
    year,
    color,
    status,
    buyValue,
    category,
    engineCapacity }: IMotorcycle) {
    super({ id, model, year, color, status, buyValue });  
    this.category = category;
    this.engineCapacity = engineCapacity;
  }
 
  // public setCategory(value: string) {
  //   this.category = value;
  // }

  // public getCategory() {
  //   return this.category;
  // }
  // public setEngineCapacity(value: number) {
  //   this.engineCapacity = value;
  // }

  // public getEngineCapacity() {
  //   return this.engineCapacity;
  // }
}