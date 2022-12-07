module.exports = {
    development: {
        client: "mysql",
        connection: {
            host: "localhost",
            port: 3306,
            database: "clinica",
            user: "root",
            password: "",
        },
        pool: {
            min: 0,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
            directory: `${__dirname}/src/database/migrations`,
        },
        seeds: {
            directory: `${__dirname}/src/database/seeds`,
        },
    },
};
