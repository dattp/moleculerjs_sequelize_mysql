const getDbConnections = () =>{
  const {
    DATABASE_HOST,
    DATABASE_PORT,
  } = process.env
  
  return {
    host: DATABASE_HOST,
    port: +DATABASE_PORT || 3306,
  }
}

exports.getSequelizeConfig = () => {
  const connection = getDbConnections()
  const { DATABASE_POOL_MIN: min, DATABASE_POOL_MAX: max } = process.env
  
  return {
    dialect: 'mysql',
    operatorsAliases: false,
    connection,
    pool: {
      max: +max,
      min: +min
    },

    logging: process.env.NODE_ENV !== 'production'
  }
}