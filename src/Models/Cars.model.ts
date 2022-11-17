import { model as createModel, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import MongoModel from './Mongo.model';

const schemaCar = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number, 
  doorsQty: Number,
  seatsQty: Number,
});

export default class Cars extends MongoModel<ICar> {
  constructor(model = createModel('Car', schemaCar)) {
    super(model);
  }
}