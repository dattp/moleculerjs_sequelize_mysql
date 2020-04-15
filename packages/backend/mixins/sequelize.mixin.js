const SequelizeAdapter = require('moleculer-db-adapter-sequelize')

const {getSequelizeConfig} = require('../util.js/db.util')

exports.DbMixin = () => {
  const {
    DATABASE_USER,
    DATABASE_PASS,
    DATABASE_NAME,
  } = process.env
  // new SequelizeAdapter('mysql://root:pass@localhost/test')  
  const config = getSequelizeConfig()
  return new SequelizeAdapter(DATABASE_NAME, DATABASE_USER, DATABASE_PASS, config)
}