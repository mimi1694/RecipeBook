const Sequelize = require('sequelize')
const db = require('../db')
const User = require('./user')

const Recipe = db.define('recipe', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    ingredients: {
        type: Sequelize.STRING,
        notEmpty: true
    },
    directions: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true
    },
    dateAdded: {
        type: Sequelize.VIRTUAL,
        set () {
            this.dateAdded = new Date().now
        }
    }
})

module.exports = Recipe
