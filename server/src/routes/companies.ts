import express from 'express';
import { createCompany, getAllCompanies } from '../controllers/companies';

const router = express.Router();

router.get('/', getAllCompanies);
router.post('/', createCompany);

// Adicione mais rotas aqui para DELETE, PATCH, etc.

export default router;
