import { Application } from 'express';

import carRoute from './carRoutes';

export default (app: Application) => {
  app.use(carRoute);
};
