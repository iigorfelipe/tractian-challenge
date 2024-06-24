import express from 'express';
import { getAssetsByCompany } from '../controllers/assets';

const router = express.Router();

router.get('/:companyId', getAssetsByCompany);

// Adicione mais rotas aqui para POST, DELETE, etc.

export default router;
