import { RequestHandler, Response } from 'express';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import IService from '../Interfaces/IService';

export default class CarsController {
  constructor(private carService: IService<ICar, Car>) {}

  create:RequestHandler = async (req, res): Promise<Response> => {
    const car = await this.carService.create(req.body);

    return res.status(201).json(car);
  };
}