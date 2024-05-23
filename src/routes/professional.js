import Router from 'express'
import { Login, Register } from '../controllers/professional.controller.js';

const router = Router()

router.post('/register', Register)

router.post('/login', Login)

export default router;

