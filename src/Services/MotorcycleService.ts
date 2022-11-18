import Motorcycle from '../Domains/Motorcycle';
import CustomError from '../Error/customError';
import IFactory from '../Interfaces/IFactory';
import IModel from '../Interfaces/IModel';
import IMotorcycle from '../Interfaces/IMotorcycle';
import IService from '../Interfaces/IService';

export default class MotorcycleService implements IService<IMotorcycle, Motorcycle> {
  constructor(
    private model: IModel<IMotorcycle>,
    private factory: IFactory,
  ) {}

  async create(obj: IMotorcycle): Promise<Motorcycle> {
    const moto = await this.model.create({ ...obj }); 
    return this.factory.createDomainMotorcycle(moto);   
    // const car = new Motorcycle(cars);
    // return car;
  }

  async readOne(id:string):Promise<Motorcycle> {
    const moto = await this.model.readOne(id);
    if (!moto) throw new CustomError('Motorcycle not found', 404);
    return this.factory.createDomainMotorcycle(moto);
    // const car = new Motorcycle(cars);
    // return car;
  }

  async read():Promise<Motorcycle[]> {
    const motos = await this.model.read();
    
    return motos.map((moto) => this.factory.createDomainMotorcycle(moto));

    // const listCars = cars.map((car) => new Motorcycle(car));
    // return listCars;
  }

  async update(id: string, obj: IMotorcycle): Promise<Motorcycle> {
    const moto = await this.model.update(id, obj);
    if (!moto) throw new CustomError('Motorcycle not found', 404);
    return this.factory.createDomainMotorcycle(moto);
    // const carUpdated = new Motorcycle(car);
    // return carUpdated;
  }
}