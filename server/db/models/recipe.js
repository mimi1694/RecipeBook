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
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'https://typeset-beta.imgix.net/lovelace/uploads/367/44d076f0-d354-0133-8308-06e18a8a4ae5.png'
    },
    dateAdded: {
        type: Sequelize.DATE
    }
})

module.exports = Recipe
