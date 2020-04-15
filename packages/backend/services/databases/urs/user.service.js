
const DbService = require('moleculer-db')
const Sequelize = require('sequelize')

const SequelizeAdapter = require('../../../mixins/sequelize.mixin')

module.exports = {
  name: 'usr',
  mixins: [DbService],
  adapter: SequelizeAdapter.DbMixin(),
  model: {
    name: 'users',
    define: {
      name: Sequelize.STRING,
      pass: Sequelize.STRING,
      status: Sequelize.TINYINT
    },
    options: {

    }
  },
  settings: {
    fields: ['name', 'pass', 'status', 'createAt', 'updateAt']
  },
  actions: {
    findAll() {      
      return this.adapter.find({})
    },
    findByQuery() {
      return this.adapter.db.query('SELECT * FROM users WHERE status = 1').then(([res]) => res)
    },
    updateUser(id, user) {
      return this.adapter.updateById(id, {$set: user})
    }
  }
}