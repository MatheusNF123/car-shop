import express from 'express';
import MotorcycleODM from '../Models/MotorcycleODM';
import MotorcycleService from '../Services/MotorcycleService';
import MotorcycleController from '../Controllers/MotorcycleController';
import CatchError from '../Error/CatchError';
import Factory from '../Factory/Factory';

const MOTORCYCLES = 'motorcycles';

const motorcycle = new MotorcycleODM();
const motorcycleService = new MotorcycleService(motorcycle, new Factory());
const motorcycleController = new MotorcycleController(motorcycleService);

const router = express();

router.post(`/${MOTORCYCLES}`, motorcycleController.create);
router.get(`/${MOTORCYCLES}/:id`, CatchError.resolver(motorcycleController.readOne));
router.get(`/${MOTORCYCLES}`, motorcycleController.read);
router.put(`/${MOTORCYCLES}/:id`, CatchError.resolver(motorcycleController.update));
router.delete(`/${MOTORCYCLES}:id`, CatchError.resolver(motorcycleController.delete));

export default router;