import { Application } from 'express';

import carRoute from './carRoutes';
import motorcyclesRoute from './motorcycleRoutes';

export default (app: Application) => {
  app.use(carRoute);
  app.use(motorcyclesRoute);
};
