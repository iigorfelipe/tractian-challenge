import express from 'express';
import { getLocationsByCompany } from '../controllers/locations';

const router = express.Router();

router.get('/:companyId', getLocationsByCompany);

// Adicione mais rotas aqui para POST, DELETE, etc.

export default router;
