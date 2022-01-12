exports.development = {
    client: 'postgresql',
    connection: {
        database : 'secretSharing',
        user : 'postgres',
        password: 'sa123##',
        port : 5432,
        host : 'localhost'
    },
    migrations: {
        directory: './migrations',
        tableName: 'knex_migrations'
    }
}