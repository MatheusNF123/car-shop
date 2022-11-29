import { RequestHandler, Response } from 'express';
// import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import IService from '../Interfaces/IService';

export default class MotorcycleController {
  constructor(private motorcycleService: IService<IMotorcycle>) {}

  create:RequestHandler = async (req, res): Promise<Response> => {
    const car = await this.motorcycleService.create(req.body);

    return res.status(201).json(car);
  };

  readOne:RequestHandler = async (req, res): Promise<Response> => {
    const { id } = req.params;
    const car = await this.motorcycleService.readOne(id);

    return res.status(200).json(car);
  };

  read:RequestHandler = async (_req, res): Promise<Response> => {
    const listCars = await this.motorcycleService.read();

    return res.status(200).json(listCars);
  };

  update: RequestHandler = async (req, res): Promise<Response> => {
    const { id } = req.params;
    const { body } = req;
    const carUpdated = await this.motorcycleService.update(id, body);

    return res.status(200).json(carUpdated);
  };

  delete: RequestHandler = async (req, res):Promise<Response> => {
    const { id } = req.params;
    await this.motorcycleService.delete(id);
    
    return res.sendStatus(204);
  };
}