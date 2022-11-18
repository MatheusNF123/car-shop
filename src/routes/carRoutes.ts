import express from 'express';
import CarODM from '../Models/CarODM';
import CarService from '../Services/CarService';
import CarController from '../Controllers/CarController';
import CatchError from '../Error/CatchError';

const car = new CarODM();
const carService = new CarService(car);
const carController = new CarController(carService);

const router = express();

router.post('/cars', carController.create);
router.get('/cars/:id', CatchError.resolver(carController.readOne));
router.get('/cars', carController.read);

export default router;