const router = require('express').Router()
const { Recipe, User } = require('../db/models')

router.get('/', (req, res, next) => {
    Recipe.findAll({})
    .then(recipes => res.json(recipes))
    .catch(next)
})
router.get('/:uid', (req, res, next) => {
    Recipe.findAll({
        where: {
            userId: req.params.uid
        }
    })
    .then(recipes => res.json(recipes))
    .catch(next)
})

module.exports = router
