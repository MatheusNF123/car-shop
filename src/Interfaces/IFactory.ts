// import Car from '../Domains/Car';
import Car from '../Domains/Car';
import Motorcycle from '../Domains/Motorcycle';
import ICar from './ICar';
import IMotorcycle from './IMotorcycle';
 
export default interface IFactory {
  createDomainCar(obj: ICar): Car 
  createDomainMotorcycle(obj: IMotorcycle): Motorcycle
}