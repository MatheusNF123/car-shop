import Car from '../Domains/Car';
import Motorcycle from '../Domains/Motorcycle';
import ICar from '../Interfaces/ICar';
import IFactory from '../Interfaces/IFactory';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class Factory implements IFactory {
  createDomainCar(car:ICar): Car {
    return new Car(car);
  }
  createDomainMotorcycle(moto:IMotorcycle): Motorcycle {
    return new Motorcycle(moto);
  }
}