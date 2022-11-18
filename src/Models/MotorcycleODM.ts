import { /* model as createModel, */ Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

// const schemaCar = new Schema<IMotorcycle>({
//   model: String,
//   year: Number,
//   color: String,
//   status: Boolean,
//   buyValue: Number, 
//   category: String,
//   engineCapacity: Number,
// }, { versionKey: false });

export default class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor(/* model = createModel('Car', schemaCar) */) {
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