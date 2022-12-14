import { /* model as createModel, */ Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schemaCar = new Schema<IMotorcycle>({
      model: String,
      year: Number,
      color: String,
      status: Boolean,
      buyValue: Number, 
      category: String,
      engineCapacity: Number,
    }, { versionKey: false });
    super(schemaCar, 'motorcycles');
  }
}