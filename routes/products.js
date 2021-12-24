const express = require('express')
const router = express.Router()
const productsControllers = require('../controllers/productsControllers')
const { needsAuth } = require('../utils/auth')

router.use(needsAuth)
router.delete('/:id', productsControllers.remove)
router.patch('/:id', productsControllers.patch)
router.put('/:id', productsControllers.put)
router.post('/', productsControllers.create)
router.get('/:id', productsControllers.getByID)
router.get('/', productsControllers.getAll)
router.post('/:id/images', productsControllers.createImage)
router.delete('/:productId/images/:id', productsControllers.removeImage)


module.exports = router