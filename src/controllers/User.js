const CrudController = require("./CrudController");
const path = require('path');
const jwt = require('jsonwebtoken');
const { env } = require("process");
const md5 = require("md5");

const User = require(path.resolve('src', 'database', 'models', 'User'))

class UserController extends CrudController {
  constructor() {
    super(new User());
  }

  async create(req, res) {
    const { body } = req

    const user = {
      passwd_hash: md5(body.password),
      ...body
    }

    delete user.password

    try {
      await this.model.insert(user)
      res.sendStatus(201)
    } catch (error) {
      res.sendStatus(422)
    }
  }

  async update(req, res) {
    const { body } = req

    const user = {
      passwd_hash: md5(body.password),
      ...body
    }

    delete user.password

    try {
      await this.model.update(user)
      res.sendStatus(201)
    } catch (error) {
      res.sendStatus(422)
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    const user_id = await this.model.findByEmailAndPassword(email, password)

    if (!user_id) {
      return res.status(404).send({
        message: 'Usuário não encontrado ou senha inválida'
      })
    }

    const acessToken = jwt.sign({ email }, env.APP_ACCESS_TOKEN, { expiresIn: '1min' })
    return res.send({ acessToken })
  }
}

module.exports = new UserController();