import Factory from '../Factory/Factory';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import AbstractServiceODM from './AbstractServiceODM';

const CAR_NOT_FOUND = 'Car not found';

export default class CarsService extends AbstractServiceODM<ICar> {
  constructor(model = new CarODM(), factory = new Factory()) {
    super(model, factory, CAR_NOT_FOUND);
  }
}