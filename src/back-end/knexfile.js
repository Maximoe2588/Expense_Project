module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: 'localhost',
        user: 'wmsqpfaw',
        password: 'your_password',
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
  