require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'gobarber',
  port: 5432,
  define: {
    timestamps: false,
    underscored: true,
    undercoredAll: true,
  },
};
