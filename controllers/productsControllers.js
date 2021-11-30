const db = require('../db')
const Product = require('../models/product')(db)


const remove = (req, res) => {
  res.send({
    success: true,
    data: 'id ' + req.params.id
  })
}

const patch = (req, res) => {
  console.log(req.body)
  res.send({
    success: true,
    data: 'id ' + req.params.id
  })
}

const put = (req, res) => {
  console.log(req.body)
  res.send({
    success: true,
    data: 'id ' + req.params.id
  })
}

const create = async (req, res) => {
  const { product, price } = req.body
  await Product.create([product, price])
  res.send({
    success: true,
    data: req.body
  })
}

const getByID = (req, res) => {
  res.send({
    name: 'Product ' + req.params.id
  })
}

const getAll = async (req, res) => {
  const products = await Product.findAll()
  res.send({
    products
  })
}

module.exports = {
  remove,
  patch,
  put,
  create,
  getByID,
  getAll
}