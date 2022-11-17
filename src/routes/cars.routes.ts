import express from 'express';
import Cars from '../Models/Cars.model';
import CarsService from '../Services/Cars.Service';
import CarsController from '../Controllers/Cars.controller';

const cars = new Cars();
const carsService = new CarsService(cars);
const carsController = new CarsController(carsService);

const router = express();

router.post('/cars', carsController.create);

export default router;