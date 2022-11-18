import { /* model as createModel, */ Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

// const schemaCar = new Schema<ICar>({
//   model: String,
//   year: Number,
//   color: String,
//   status: Boolean,
//   buyValue: Number, 
//   doorsQty: Number,
//   seatsQty: Number,
// });

export default class CarODM extends AbstractODM<ICar> {
  constructor(/* model = createModel('Car', schemaCar) */) {
    const schemaCar = new Schema<ICar>({
      model: String,
      year: Number,
      color: String,
      status: Boolean,
      buyValue: Number, 
      doorsQty: Number,
      seatsQty: Number,
    });
    super(schemaCar, 'Car');
  }
}