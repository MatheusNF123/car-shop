import Motorcycle from '../Domains/Motorcycle';
import CustomError from '../Error/customError';
import IFactory from '../Interfaces/IFactory';
import IModel from '../Interfaces/IModel';
import IMotorcycle from '../Interfaces/IMotorcycle';
import IService from '../Interfaces/IService';

const MOTORCYCLE_NOT_FOUND = 'Motorcycle not found';

export default class MotorcycleService implements IService<IMotorcycle, Motorcycle> {
  constructor(
    private model: IModel<IMotorcycle>,
    private factory: IFactory,
  ) {}

  async create(obj: IMotorcycle): Promise<Motorcycle> {
    const moto = await this.model.create({ ...obj }); 
    return this.factory.createDomainMotorcycle(moto);
  }

  async readOne(id:string):Promise<Motorcycle> {
    const moto = await this.model.readOne(id);
    if (!moto) throw new CustomError(MOTORCYCLE_NOT_FOUND, 404);
    return this.factory.createDomainMotorcycle(moto);
  }

  async read():Promise<Motorcycle[]> {
    const motos = await this.model.read();
    
    return motos.map((moto) => this.factory.createDomainMotorcycle(moto));
  }

  async update(id: string, obj: IMotorcycle): Promise<Motorcycle> {
    const moto = await this.model.update(id, obj);
    if (!moto) throw new CustomError(MOTORCYCLE_NOT_FOUND, 404);
    return this.factory.createDomainMotorcycle(moto);
  }

  async delete(_id: string): Promise<Motorcycle> {
    const moto = await this.model.delete(_id);
    if (!moto) throw new CustomError(MOTORCYCLE_NOT_FOUND, 404);
    return this.factory.createDomainMotorcycle(moto); 
  }
}