const router = require('express').Router()
const { Recipe } = require('../db/models')

router.get('/', (req, res, next) => {
    Recipe.findAll({})
    .then(recipes => res.json(recipes))
    .catch(next)
})

module.exports = router