import Car from '../Domains/Car';
import CustomError from '../Error/customError';
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

  async readOne(id:string):Promise<Car> {
    const cars = await this.model.readOne(id);
    if (!cars) throw new CustomError('Car not found', 404);
    const car = new Car(cars);
    return car;
  }

  async read():Promise<Car[]> {
    const cars = await this.model.read();
    
    const listCars = cars.map((car) => new Car(car));
    return listCars;
  }
}