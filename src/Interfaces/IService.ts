import Car from '../Domains/Car';
import Motorcycle from '../Domains/Motorcycle';

export type AllVehicle = Car | Motorcycle;

export default interface IService<T> {
  create(obj: T):Promise<AllVehicle>
  readOne(id:string):Promise<AllVehicle>
  read():Promise<AllVehicle[]>
  update(_id: string, obj: T): Promise<AllVehicle>
  delete(_id:string):Promise<AllVehicle>
}