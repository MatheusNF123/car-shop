import { isValidObjectId, Model, models, Schema, model /* UpdateQuery */ } from 'mongoose';
import CustomError from '../Error/customError';
import IModel from '../Interfaces/IModel';

export default abstract class AbstractODM<T> implements IModel<T> {
  _model: Model<T>;
  _modelName: string;
  _schema: Schema<T>;

  constructor(schema: Schema, name: string) {
    this._schema = schema;
    this._modelName = name;
    this._model = models[this._modelName] || model(this._modelName, this._schema);
  }

  async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  async readOne(_id:string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw new CustomError('Invalid Mongo id', 422);
    return this._model.findOne({ _id });
  }

  async read(): Promise<T[]> {
    return this._model.find();
  }

  // update(_id: string, obj: T): Promise<T | null> {
  //   if (!isValidObjectId(_id)) throw new CustomError('Invalid Mongo id', 422);
  //   return this._model.updateOne({ _id }, { ...obj } as UpdateQuery<T>, { new: true });
  // }

  // delete(id: string): Promise<T | null> {
  //   if (!isValidObjectId(_id)) throw new CustomError('Invalid Mongo id', 422); 
  // }
}