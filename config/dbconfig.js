const knex = require ("knex");

const dbms = knex({
    client: "mysql",

    connection: {
        host: "localhost",
        user: "root",
        password: "admin123",
        database: "astapi"
    },
});

module.exports = dbms;