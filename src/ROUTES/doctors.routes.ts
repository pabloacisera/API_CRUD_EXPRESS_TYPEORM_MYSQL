import { Router } from 'express';
import DoctorsController from '../CONTROLLERS/doctors.controllers';

const router = Router();

router.post('/register', DoctorsController.registrar);
router.post('/login', DoctorsController.logear)


export default router;
