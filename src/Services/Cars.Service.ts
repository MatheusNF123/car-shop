import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import IModel from '../Interfaces/IModel';
import IService from '../Interfaces/IService';

export default class CarsService implements IService<ICar, Car> {
  constructor(
    private model: IModel<ICar>,
  ) {}

  async create(obj: ICar): Promise<Car> {
    const cars = await this.model.create({ ...obj });
    
    const car = new Car(cars);
    return car;
  }
}