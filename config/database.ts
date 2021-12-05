/**
 * Config source: https://git.io/JesV9
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

 import Env from '@ioc:Adonis/Core/Env'
 import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

 const databaseConfig: DatabaseConfig = {

   connection: 'DB_CONNECTION',

   connections: {


     pg: {
       client: 'pg',
       connection: {
         host: 'PG_HOST',
         port: 'PG_PORT',
         user: 'PG_USER',
         password: 'PG_PASSWORD',
         database: 'PG_DB_NAME',
       },
       migrations: {
         naturalSort: true,
       },
       healthCheck: false,
       debug: false,
     },

   }
 }

 export default databaseConfig
