import express from 'express';
import routes from './routes';
import MiddleError from './middlewares/ErrorMiddleware';

class App {
  public app: express.Express;
  public router = routes;

  constructor() {
    this.app = express();
    this.config();
    this.routers();
  }

  private config():void {
    this.app.use(express.json());
  }

  private routers(): void {
    this.app.get('/', (req, res) => res.status(200).json({ ok: true }));
    this.router(this.app);
    this.app.use(MiddleError.errorMidleware);
  }

  // public start(PORT: string | number):void {
  //   this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  // }
}

const app = new App();
export default app.app;
export { App };

// const app = express();

// app.use(express.json());

// app.get('/', (req, res) => res.status(200).json({ ok: true }));
// routes(app);
// app.use(MiddleError.errorMidleware);
// export default app;