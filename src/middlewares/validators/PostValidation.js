const { Schema } = require('valivar');
const path = require('path');

const Post = require(path.resolve('src', 'database', 'models', 'Post'))

const defaultRules = {
  title: {
    type: String,
    required: true,
    length: { min: 3, max: 100 },
    message: {
      required: 'O título é um campo obrigatório.',
      length: 'O título deve ter no mínimo 3 caracteres.',
    }
  },
  content: {
    type: String,
    required: true,
    length: { min: 6, max: 100 },
    message: {
      required: 'O conteudo é um campo obrigatório.',
      length: 'O conteúdo deve ter no mínimo 6 caracteres.',
    }
  },
  user_id: {
    type: Number,
    required: true,
    message: {
      required: 'O user_id é um campo obrigatório.'
    }
  }
}

const createRules = new Schema(defaultRules)

const updateRules = new Schema({
  id: {
    type: Number,
    required: true,
    message: {
      required: 'O id é um campo obrigatório.'
    }
  },
  ...defaultRules,
})

const createPostRules = async (req, res, next) => {
  const { body } = req;
  const erros = createRules.validate(body)

  if (erros.length) {
    return res.status(422).send({
      message: erros[0].message,
    })
  }

  next();
}

const updatePostRules = async (req, res, next) => {
  const { body } = req;
  const erros = updateRules.validate(body)

  if (erros.length) {
    return res.status(422).send({
      message: erros[0].message,
    })
  }
  const { id } = body;
  const model = new Post()
  const post = await model.findById(id)

  if (!post) {
    return res.status(422).send({
      message: 'O post que deseja atualizar não foi encontrado',
    })
  }

  next();
}

module.exports = {
  createPostRules,
  updatePostRules
}