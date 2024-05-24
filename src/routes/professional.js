import Router from 'express';
import { professionalController } from '../controllers/professional.controller.js';

const router = Router();

router.get('/show_prof/:id', professionalController.viewDetail);
router.post('/register', professionalController.create);
router.delete('/delete_prof/:id', professionalController.delete);
router.put('/update_prof/:id', professionalController.actualizar);


router.post('/login', professionalController.login);

export default router;
