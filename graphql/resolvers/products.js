const db = require('../../db')
const Product = require('../../models/product')(db)

const getAllProducts = async (context, { filter }) => {
  let products = null
  if (filter && filter.categoryId) {
    products = await Product.findAllByCategory(filter.categoryId)
  } else {
    products = await Product.findAll()
  }
  return products
}

const createProduct = async (context, { input }) => {
  const { product, price } = input
  await Product.create([product, price])
  return {
    product, price
  }
}

module.exports = {
  getAllProducts, createProduct
}

