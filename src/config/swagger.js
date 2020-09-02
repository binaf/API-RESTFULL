exports.options = {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: "Un exemple d'API pour app crm team Web Rain",
      description: 'Une API construite avec fast REST API avec Node.js, MongoDB, Fastify et Swagger',
      version: '1.0.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Pour plus d informations'
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
}
