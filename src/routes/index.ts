import { Application } from 'express';

import carsRoute from './cars.routes';

export default (app: Application) => {
  app.use(carsRoute);
};
