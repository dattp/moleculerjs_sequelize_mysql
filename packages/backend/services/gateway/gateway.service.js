const ApiGateway = require('moleculer-web')
const {SERVICE_USER} = require('../../constants')
module.exports = {

  mixins: [ApiGateway],
  settings: {
    routes: [
      /**
			 * API routes
			 */
      {
        port: 3000,
        path: '/api',

        authentication: false,
        //authorization: true,

        autoAliases: false,

        aliases: {
          'GET /users' : `${SERVICE_USER}.getAllUsers`,
          'POST /users/updateUserById' : `${SERVICE_USER}.updateUserById`,
        },

        // Disable to call not-mapped actions
        //mappingPolicy: "restrict",

        // Use bodyparser modules
        bodyParsers: {
          json: { limit: '2MB' },
          urlencoded: { extended: true, limit: '2MB' }
        },
      }
    ]
  }
}