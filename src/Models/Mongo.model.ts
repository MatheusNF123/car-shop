import { Model } from 'mongoose';
import IModel from '../Interfaces/IModel';

export default abstract class Veicle<T> implements IModel<T> {
  readonly model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }
}