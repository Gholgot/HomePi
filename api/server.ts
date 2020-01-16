import * as TaskEither from 'fp-ts/lib/TaskEither';
import { Option, None } from 'fp-ts/lib/Option';



const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request: object, reply: object) => {
  return { hello: 'world' }
})

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