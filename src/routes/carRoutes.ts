import express from 'express';
import CarODM from '../Models/CarODM';
import CarService from '../Services/CarService';
import CarController from '../Controllers/CarController';
import CatchError from '../Error/CatchError';
import Factory from '../Factory/Factory';

const car = new CarODM();
const carService = new CarService(car, new Factory());
const carController = new CarController(carService);

const router = express();

router.post('/cars', carController.create);
router.get('/cars/:id', CatchError.resolver(carController.readOne));
router.get('/cars', carController.read);
router.put('/cars/:id', CatchError.resolver(carController.update));
router.delete('/cars/:id', CatchError.resolver(carController.delete));

export default router;