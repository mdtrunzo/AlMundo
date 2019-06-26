const express = require('express');
const router = express.Router();
const db = require('./../connection');
const Hoteles = require('./../models/Hotels');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;



router.get('/', (req, res) =>
  Hoteles.findAll({
    attributes: ['id', 'name', 'stars', 'price', 'image', 'amenities']
  })
    .then(hoteles => {
      res.send(hoteles);
    })
    .catch(err => console.log(err)))


router.get('/add', (req, res) => {
  const data = {
    id: "161914",
    name: "NM Lima Hotel",
    stars: 4,
    price: 1445.5,
    image: "981018_26_b.jpg",
    amenities: "business-center, nightclub,deep-soaking-bathtub,fitness-center,garden"
  }
  let { id, name, stars, price, image, amenities } = data;

  Hoteles.create({
    id,
    name,
    stars,
    price,
    image,
    amenities
  })
    .then(hoteles => res.redirect('/hoteles'))
    .catch(err => console.log(err))
})

router.get('/search', (req, res) => {
  const { term } = req.query

  Hoteles.findOne({
    where: term,
    attributes: ['name']
  })
    .then(hoteles => res.render('/hoteles', { hoteles }))
    .catch(err => console.log(err))
})

module.exports = router;