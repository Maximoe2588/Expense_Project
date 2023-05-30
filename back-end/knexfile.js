module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: 'hansken.db.elephantsql.com',
        port: 5432,
        user: 'wmsqpfaw',
        password: 'pW5v8-D47Gvgpz3p3OJ69iFLhtLhnSZS',
        database: 'wmsqpfaw',
      },
      migrations: {
        directory: './db/migrations',
      },
      seeds: {
        directory: './db/seeds',
      },
    },
  };
  