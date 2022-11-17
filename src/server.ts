import 'dotenv/config';
import App from './app';
import connectToDatabase from './Models/Connection';

const app = new App();

const PORT = process.env.PORT || 3001;
connectToDatabase()
  .then(() => {
    app.app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
  })
  .catch((error) => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
  });