import Car from '../Domains/Car';
import CustomError from '../Error/customError';
import ICar from '../Interfaces/ICar';
import IFactory from '../Interfaces/IFactory';
import IModel from '../Interfaces/IModel';
import IService from '../Interfaces/IService';

const CAR_NOT_FOUND = 'Car not found';

export default class CarsService implements IService<ICar, Car> {
  constructor(
    private model: IModel<ICar>,
    private factory: IFactory,
  ) {}

  async create(obj: ICar): Promise<Car> {
    const cars = await this.model.create({ ...obj }); 
    return this.factory.createDomainCar(cars);
  }

  async readOne(id:string):Promise<Car> {
    const cars = await this.model.readOne(id);
    if (!cars) throw new CustomError(CAR_NOT_FOUND, 404);
    return this.factory.createDomainCar(cars);
  }

  async read():Promise<Car[]> {
    const cars = await this.model.read();
    
    return cars.map((car) => this.factory.createDomainCar(car));
  }

  async update(id: string, obj: ICar): Promise<Car> {
    const car = await this.model.update(id, obj);
    if (!car) throw new CustomError(CAR_NOT_FOUND, 404);
    return this.factory.createDomainCar(car);
  }

  async delete(_id: string): Promise<Car> {
    const car = await this.model.delete(_id);
    if (!car) throw new CustomError(CAR_NOT_FOUND, 404);
    return this.factory.createDomainCar(car); 
  }
}