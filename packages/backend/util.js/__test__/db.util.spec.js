/* eslint-disable no-undef */
const { getSequelizeConfig } = require('../db.util')

describe('db.util', () => {
  it('should return correct config', () =>{
    const config = getSequelizeConfig()
    console.log('=======>config: ', config)
    expect(config.dialect).toEqual('mysql')
    expect(config.connection.port).toEqual(3306)
  })
})