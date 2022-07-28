module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'ucms'),
        username: env('DATABASE_USERNAME', 'ucms'),
        password: env('DATABASE_PASSWORD', 'bgt%zhn'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
