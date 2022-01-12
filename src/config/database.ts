import { resolve } from "path";

export default{
    client: 'postgresql',
    connection: {
        host : 'localhost',
        port : 5432,
        user : 'postgres',
        password : 'sa123##',
        database : 'secretSharing'
    },
    migrations: {
        directory: resolve(__dirname, '../../migrations'),
        tableName: 'knex_migrations'
      }
}