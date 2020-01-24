import * as TaskEither from 'fp-ts/lib/TaskEither';
import { Option, None } from 'fp-ts/lib/Option';
import userController from './controllers/user.controller';



const fastify = require('fastify')({ logger: true })

// JWT
fastify.register(require('fastify-jwt'), {
  secret: '_hqswtKI˜!Secret2020'
})

// Route Registering
fastify.register(userController);

// Run the server!
const start = TaskEither.tryCatch<Error, Option<None>>(
  async (): Promise<Option<None>> => {
    await fastify.listen(2100)
    return fastify.log.info(`server listening on ${fastify.server.address().port}`)
  },
  error => {
    fastify.log.error(error)
    process.exit(1)
  }
)
start()