import Car from '../Domains/Car';
import CustomError from '../Error/customError';
import ICar from '../Interfaces/ICar';
import IFactory from '../Interfaces/IFactory';
import IModel from '../Interfaces/IModel';
import IService from '../Interfaces/IService';

export default class CarsService implements IService<ICar, Car> {
  constructor(
    private model: IModel<ICar>,
    private factory: IFactory,
  ) {}

  async create(obj: ICar): Promise<Car> {
    const cars = await this.model.create({ ...obj }); 
    return this.factory.createDomainCar(cars); 
    // const car = new Car(cars);
    // return car;
  }

  async readOne(id:string):Promise<Car> {
    const cars = await this.model.readOne(id);
    if (!cars) throw new CustomError('Car not found', 404);
    return this.factory.createDomainCar(cars); 
    // const car = new Car(cars);
    // return car;
  }

  async read():Promise<Car[]> {
    const cars = await this.model.read();
    
    return cars.map((car) => this.factory.createDomainCar(car));
    
    // const listCars = cars.map((car) => new Car(car));
    // return listCars;
  }

  async update(id: string, obj: ICar): Promise<Car> {
    const car = await this.model.update(id, obj);
    if (!car) throw new CustomError('Car not found', 404);
    return this.factory.createDomainCar(car); 
    // const carUpdated = new Car(car);
    // return carUpdated;
  }
}