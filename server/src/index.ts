import express from 'express';
import cors from 'cors';
import companiesRoutes from './routes/companies';
import locationsRoutes from './routes/locations';
import assetsRoutes from './routes/assets';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/companies', companiesRoutes);
app.use('/locations', locationsRoutes);
app.use('/assets', assetsRoutes);

app.listen(port, () => {
  console.log(`running at http://localhost:${port}`);
});
