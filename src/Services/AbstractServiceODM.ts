import CustomError from '../Error/customError';
import Factory from '../Factory/Factory';
import IModel from '../Interfaces/IModel';
import IService, { AllVehicle } from '../Interfaces/IService';

export default abstract class AbstractServiceODM<T> implements IService<T> {
  model: IModel<T>;
  factory: Factory;
  ErrorMsg: string;
  constructor(
    model: IModel<T>,
    factory: Factory,
    ErrorMsg: string,
  ) {
    this.model = model;
    this.factory = factory;
    this.ErrorMsg = ErrorMsg;
  }

  async create(obj: T): Promise<AllVehicle> {
    const cars = await this.model.create({ ...obj }); 
    return this.factory.createDomainVehicle(cars, this.ErrorMsg);
  }

  async readOne(id:string):Promise<AllVehicle> {
    const cars = await this.model.readOne(id);
    if (!cars) throw new CustomError(this.ErrorMsg, 404);
    return this.factory.createDomainVehicle(cars, this.ErrorMsg);
  }

  async read():Promise<AllVehicle[]> {
    const cars = await this.model.read();
    
    return cars.map((car) => this.factory.createDomainVehicle(car, this.ErrorMsg));
  }

  async update(id: string, obj: T): Promise<AllVehicle> {
    const car = await this.model.update(id, obj);
    if (!car) throw new CustomError(this.ErrorMsg, 404);
    return this.factory.createDomainVehicle(car, this.ErrorMsg);
  }

  async delete(_id: string): Promise<AllVehicle> {
    const car = await this.model.delete(_id);
    if (!car) throw new CustomError(this.ErrorMsg, 404);
    return this.factory.createDomainVehicle(car, this.ErrorMsg); 
  }
}