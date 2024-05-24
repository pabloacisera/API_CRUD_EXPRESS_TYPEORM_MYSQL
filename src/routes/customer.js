import Router from 'express'
import {clienteController} from '../controllers/client.controllers.js'

const router = Router()

router.get('/all_client', clienteController.viewAll)

router.get('/details_client/:id', clienteController.viewDetail)

router.post('/create_client', clienteController.create)

router.put('/update_client/:id', clienteController.update)

router.delete('/delete_client/:id', clienteController.delete)

export default router;