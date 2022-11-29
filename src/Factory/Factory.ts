import Car from '../Domains/Car';
import Motorcycle from '../Domains/Motorcycle';
// import Vehicle from '../Domains/Vehicle';
import CustomError from '../Error/customError';
import ICar from '../Interfaces/ICar';
// import IFactory from '../Interfaces/IFactory';
import IMotorcycle from '../Interfaces/IMotorcycle';
import IVehicle from '../Interfaces/IVehicle';
import { AllVehicle } from '../Interfaces/IService';

export interface IValue extends IVehicle{
  doorsQty?: number,
  seatsQty?: number,
  category?: string,
  engineCapacity?: number,
}

export default class Factory {
  createDomainVehicle(obj:any, msg:string):AllVehicle {
    if ('doorsQty' in obj) {
      return new Car(obj as ICar);
    }
    if ('category' in obj) {
      return new Motorcycle(obj as IMotorcycle);
    }
    throw new CustomError(msg, 404);
  }
}