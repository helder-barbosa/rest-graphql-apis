

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

const create = (req, res) => {
  console.log(req.body)
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

const getAll = (req, res) => {
  res.send({
    products: ['all products']
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