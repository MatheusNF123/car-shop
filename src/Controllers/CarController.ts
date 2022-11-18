import { RequestHandler, Response } from 'express';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import IService from '../Interfaces/IService';

export default class CarController {
  constructor(private carService: IService<ICar, Car>) {}

  create:RequestHandler = async (req, res): Promise<Response> => {
    const car = await this.carService.create(req.body);

    return res.status(201).json(car);
  };

  readOne:RequestHandler = async (req, res): Promise<Response> => {
    const { id } = req.params;
    const car = await this.carService.readOne(id);

    return res.status(200).json(car);
  };

  read:RequestHandler = async (_req, res): Promise<Response> => {
    const listCars = await this.carService.read();

    return res.status(200).json(listCars);
  };
}