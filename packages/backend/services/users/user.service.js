const { SERVICE_USER } = require('../../constants')

module.exports = {
  name: SERVICE_USER,
  actions: {
    getAllUsers: {
      cache: {
        keys: ['status'],
        ttl:30
      },
      params: {
        status: {
          type: 'string',
          optional: 1
        }
      },
      handler(ctx) {
        const {status} = ctx.params
        console.log('>>status: ', status)
        return ctx.call('usr.findByQuery')
      }
    }
  }
}