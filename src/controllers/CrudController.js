class CrudController {

  constructor(model) {
    this.model = model
  }

  async findAll(req, res) {
    const objs = await this.model.findAll()
    res.send(objs)
  }

  async findById(req, res) {
    const { id } = req.params
    const obj = await this.model.findById(id)
    res.send(obj)
  }

  async create(req, res) {
    const obj = req.body

    try {
      await this.model.insert(obj)
      res.sendStatus(201)
    } catch (error) {
      res.sendStatus(500)
    }
  }

  async update(req, res) {
    const obj = req.body

    try {
      await this.model.update(obj)
      res.sendStatus(201)
    } catch (error) {
      res.sendStatus(500)
    }
  }

  async delete(req, res) {
    const { id } = req.params
    const obj = await this.model.delete(id)
    res.send(obj)
  }

}

module.exports = CrudController