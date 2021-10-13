const { Schema } = require('valivar');
const path = require('path');

const User = require(path.resolve('src', 'database', 'models', 'User'))

const defaultRules = {
  name: {
    type: String,
    required: true,
    length: { min: 3, max: 100 },
    message: {
      required: 'O nome é um campo obrigatório.',
      length: 'O nome deve ter no mínimo 3 caracteres.',
    }
  },
  email: {
    type: String,
    required: true,
    length: { min: 6, max: 100 },
    match: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
    message: {
      required: 'O email é um campo obrigatório.',
      length: 'O email deve ter no mínimo 6 caracteres.',
      match: 'Email inválido'
    }
  },
  password: {
    type: String,
    required: true,
    message: {
      required: 'O senha é um campo obrigatório.',
    }
  }
}

const createRules = new Schema({
  password: {
    type: String,
    required: true,
    length: { min: 6, max: 100 },
    message: {
      required: 'A senha é um campo obrigatório.',
      length: 'A senha deve ter no mínimo 6 caracteres.',
      // match: 'Senha não atende os requisitos mínimos'
    }
  },
  ...defaultRules
})

const updateRules = new Schema({
  id: {
    type: Number,
    required: true,
    message: {
      required: 'O campo id é obrigatório'
    }
  },
  ...defaultRules
})


const loginRules = new Schema({
  email: {
    type: String,
    required: true,
    match: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
    message: {
      required: 'O email é um campo obrigatório.',
      match: 'Email inválido'
    }
  },
  password: {
    type: String,
    required: true,
    message: {
      required: 'O senha é um campo obrigatório.',
    }
  }
})

const createUserRules = async (req, res, next) => {
  const { body } = req;
  const erros = createRules.validate(body)

  if (erros.length) {
    return res.status(422).send({
      message: erros[0].message,
    })
  }

  next();
}

const updateUserRules = async (req, res, next) => {
  const { body } = req;
  const erros = updateRules.validate(body)

  if (erros.length) {
    return res.status(422).send({
      message: erros[0].message,
    })
  }
  const { id } = body;
  const model = new User()
  const post = await model.findById(id)

  if (!post) {
    return res.status(422).send({
      message: 'O usuário que deseja atualizar não foi encontrado',
    })
  }

  next();
}

const loginValidator = async (req, res, next) => {
  const { body } = req
  const erros = loginRules.validate(body)

  if (erros.length) {
    return res.status(422).send({
      message: erros[0].message,
    })
  }

  next()
}

module.exports = {
  createUserRules,
  updateUserRules,
  loginValidator
}
