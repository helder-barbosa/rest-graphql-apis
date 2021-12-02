const db = require('../db')
const Product = require('../models/product')(db)


const remove = async (req, res) => {
  await Product.remove(req.params.id)
  res.send({
    success: true
  })
}

const patch = async (req, res) => {
  const oldProduct = await Product.findByID(req.params.id)
  if (!oldProduct) {
    return res.send({
      success: false,
      message: 'Product not found'
    })
  }
  if (req.body.product) {
    oldProduct.product = req.body.product
  }
  if (req.body.price) {
    oldProduct.price = req.body.price
  }
  await Product.update(req.params.id, [oldProduct.product, oldProduct.price])

  if (req.body.categories) {
    try {
      await Product.updateCategories(req.params.id, req.body.categories)
    } catch (e) {
      return res.send({
        success: false,
        message: 'Categories not found'
      })
    }

  }
  res.send({
    success: true
  })
}

const put = async (req, res) => {
  const { product, price } = req.body
  await Product.update(req.params.id, [product, price])

  res.send({
    success: true
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

const getByID = async (req, res) => {
  const product = await Product.findByID(req.params.id)
  res.send(product)
}

const getAll = async (req, res) => {
  let products = null
  if (req.query.categoryId) {
    products = await Product.findAllByCategory(req.query.categoryId)
  } else {
    const products = await Product.findAll()
  }

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