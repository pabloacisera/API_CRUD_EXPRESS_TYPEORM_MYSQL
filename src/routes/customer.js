import Router from 'express'

const router = Router()

router.get('/all_client')

router.get('/details_client/:id')

router.post('/create_client')

router.put('/update_client/:id')

router.delete('/delete_client/:id')

export default router;