// import Car from '../Domains/Car';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from './IMotorcycle';
// import IVehicle from './IVehicle';

export default interface IFactory{
  createDomainMotorcycle(obj: IMotorcycle): Motorcycle
}