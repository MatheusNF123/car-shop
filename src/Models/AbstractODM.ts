import { isValidObjectId, Model, models, Schema, model, UpdateQuery } from 'mongoose';
import CustomError from '../Error/customError';
import IModel from '../Interfaces/IModel';

const INVALID_MONG_ID = 'Invalid mongo id';

export default abstract class AbstractODM<T> implements IModel<T> {
  protected _model: Model<T>;
  protected _modelName: string;
  protected _schema: Schema;

  constructor(schema: Schema, modelName: string) {
    this._schema = schema;
    this._modelName = modelName;
    this._model = models[this._modelName] || model(this._modelName, this._schema);
  }

  async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  async readOne(_id:string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw new CustomError(INVALID_MONG_ID, 422);
    return this._model.findOne({ _id });
  }

  async read(): Promise<T[]> {
    return this._model.find();
  }

  async update(_id: string, obj: T): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new CustomError(INVALID_MONG_ID, 422);
    return this._model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }

  async delete(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new CustomError(INVALID_MONG_ID, 422); 
    return this._model.findByIdAndDelete({ _id });
  }
}