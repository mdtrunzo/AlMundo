const Sequelize = require('sequelize')
const db = require('../connection')


const Hoteles = db.define('hoteles', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  stars: {
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.INTEGER
  },
  image: {
    type: Sequelize.BLOB
  },
  amenities: {
    type: Sequelize.STRING
  },
  timestamps: false,
})

module.exports = Hoteles