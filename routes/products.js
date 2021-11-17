const express = require('express')
const router = express.Router()
const productsControllers = require('../controllers/productsControllers')


router.delete('/:id', productsControllers.remove)

router.patch('/:id', productsControllers.patch)

router.put('/:id', productsControllers.put)

router.post('/', productsControllers.create)

router.get('/:id', productsControllers.getByID)

router.get('/', productsControllers.getAll)

module.exports = router