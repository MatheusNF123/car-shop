import express from 'express';
import MotorcycleODM from '../Models/MotorcycleODM';
import MotorcycleService from '../Services/MotorcycleService';
import MotorcycleController from '../Controllers/MotorcycleController';
import CatchError from '../Error/CatchError';
import Factory from '../Factory/Factory';

const motorcycle = new MotorcycleODM();
const motorcycleService = new MotorcycleService(motorcycle, new Factory());
const motorcycleController = new MotorcycleController(motorcycleService);

const router = express();

router.post('/motorcycles', motorcycleController.create);
router.get('/motorcycles/:id', CatchError.resolver(motorcycleController.readOne));
router.get('/motorcycles', motorcycleController.read);
router.put('/motorcycles/:id', CatchError.resolver(motorcycleController.update));

export default router;