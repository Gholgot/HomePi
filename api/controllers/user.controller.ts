
const fp = require('fastify-plugin');
import { FastifyInstance, FastifyReply } from 'fastify';
import { ServerResponse } from 'http';


export default fp(async (server : FastifyInstance, opts : Object, next : Function) => {
  server.get("/test/bibi", {} , (_ : any, reply : FastifyReply<ServerResponse>) => {
    reply.send({ hello: 'bidouche' })
  })
});