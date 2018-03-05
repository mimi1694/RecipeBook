const router = require('express').Router()
const { Recipe } = require('../db/models')

router.get('/', (req, res, next) => {
    Recipe.findAll({})
    .then(recipes => res.json(recipes))
    .catch(next)
})
router.get('/userId', (req, res, next) => {
    Recipe.findAll({
        where: {
            userId: req.params.userId
        }
    })
})

module.exports = router
