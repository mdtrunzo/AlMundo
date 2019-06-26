const Sequelize = require('sequelize');

module.exports = new Sequelize('almundo', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
})

